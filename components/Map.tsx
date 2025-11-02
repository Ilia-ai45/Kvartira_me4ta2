
import React, { useEffect, useRef } from 'react';

// To prevent TypeScript errors for the Yandex Maps API
declare const ymaps: any;

const placemarksData = [
    { coords: [57.170122, 65.528659], name: 'микрорайон Зарека' }, { coords: [57.184124, 65.511034], name: 'микрорайон ДОК' }, { coords: [57.159048, 65.483771], name: 'микрорайон Дом Обороны' }, { coords: [57.118687, 65.467448], name: 'микрорайон Дударева' }, { coords: [57.1430, 65.5785], name: 'микрорайон Завод медоборудования (прим.)' }, { coords: [57.124462, 65.673495], name: 'микрорайон Зайково' }, { coords: [57.165556, 65.504444], name: 'микрорайон Затюменка' }, { coords: [57.117812, 65.646348], name: 'микрорайон Гилёво' }, { coords: [57.094979, 65.641146], name: 'микрорайон Войновка' }, { coords: [57.217635, 65.549887], name: 'микрорайон Казарово' }, { coords: [57.109230, 65.513577], name: 'микрорайон Комарово' }, { coords: [57.108633, 65.539933], name: 'микрорайон Корней' }, { coords: [57.134444, 65.583333], name: 'микрорайон КПД' }, { coords: [57.189270, 65.636457], name: 'микрорайон Матмасы' }, { coords: [57.145000, 65.491944], name: 'микрорайон Маяк' }, { coords: [57.130233, 65.488979], name: 'микрорайон Московский тракт' }, { coords: [57.108844, 65.432423], name: 'микрорайон Московский поселок' }, { coords: [57.097595, 65.570467], name: 'микрорайон Ново-Патрушево' }, { coords: [57.136152, 65.608280], name: 'микрорайон Очаково' }, { coords: [57.193869, 65.564349], name: 'микрорайон Парфеново' }, { coords: [57.0903, 65.5412], name: 'микрорайон поселок Патрушева' }, { coords: [57.154562, 65.429611], name: 'микрорайон Рощино' }, { coords: [57.191050, 65.586610], name: 'микрорайон СМП' }, { coords: [57.139957, 65.529818], name: 'микрорайон Стрела' }, { coords: [57.099780, 65.593203], name: 'микрорайон Суходолье' }, { coords: [57.181192, 65.619901], name: 'микрорайон Тарманы' }, { coords: [57.110105, 65.576746], name: 'микрорайон Тюменский 1' }, { coords: [57.105984, 65.570404], name: 'микрорайон Тюменский 2' }, { coords: [57.111341, 65.561753], name: 'микрорайон Тюменский 3' }, { coords: [57.157910, 65.359120], name: 'микрорайон Утешево' }, { coords: [57.153414, 65.426269], name: 'микрорайон Учхоз' }, { coords: [57.118611, 65.617778], name: 'микрорайон Электрон' }, { coords: [57.120837, 65.526863], name: 'микрорайон Южный' }, { coords: [57.100338, 65.582037], name: 'микрорайон Ямальский-1' }, { coords: [57.122278, 65.491559], name: 'микрорайон Ямальский-2' }, { coords: [57.168446, 65.650598], name: 'микрорайон Мыс' }
];

interface MapProps {
    onPlacemarkClick: (districtName: string) => void;
}

const Map: React.FC<MapProps> = ({ onPlacemarkClick }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;
        
        if (typeof ymaps === 'undefined') {
            console.error('Yandex Maps API is not available.');
            return;
        }

        ymaps.ready(() => {
            if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) {
                return;
            }

            const myMap = new ymaps.Map(mapContainerRef.current, {
                center: [57.153033, 65.534328],
                zoom: 11,
                controls: ['zoomControl', 'fullscreenControl']
            });

            myMap.behaviors.disable('scrollZoom');
            mapInstanceRef.current = myMap;

            const objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 64,
                clusterDisableClickZoom: false,
            });

            objectManager.objects.options.set('preset', 'islands#amberDotIcon');
            objectManager.clusters.options.set('preset', 'islands#invertedAmberClusterIcons');
            
            const features = placemarksData.map((data, index) => ({
                type: 'Feature',
                id: index,
                geometry: {
                    type: 'Point',
                    coordinates: data.coords
                },
                properties: {
                    balloonContent: `
                        <div class="p-2 font-sans bg-stone-800 text-white rounded-md" style="font-family: 'Montserrat', sans-serif;">
                            <strong class="text-base text-amber-400 block mb-3">${data.name}</strong>
                            <button id="ai-button-${index}" data-district="${data.name}" class="w-full text-center px-4 py-2 bg-amber-500 text-gray-900 font-bold text-sm rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300">
                                Узнать о районе с AI
                            </button>
                        </div>`,
                    hintContent: data.name
                },
                options: {
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,
                }
            }));
            
            objectManager.add({
                type: 'FeatureCollection',
                features: features
            });

            myMap.geoObjects.add(objectManager);

            // Add event listener for balloon open
            objectManager.objects.events.add('balloonopen', (e: any) => {
                const objectId = e.get('objectId');
                const button = document.getElementById(`ai-button-${objectId}`);
                if (button) {
                    button.addEventListener('click', () => {
                        const districtName = button.getAttribute('data-district');
                        if (districtName) {
                            onPlacemarkClick(districtName);
                        }
                    });
                }
            });

            const bounds = objectManager.getBounds();
            if (bounds) {
                myMap.setBounds(bounds, { checkZoomRange: true, zoomMargin: 35 });
            }
        });

        return () => {
            isMounted = false;
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
                mapInstanceRef.current = null;
            }
        };
    }, [onPlacemarkClick]);

    return (
        <>
            <section id="map" className="py-24 bg-stone-900">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Интерактивная карта районов</h2>
                        <p className="text-base sm:text-lg text-gray-400">
                            Изучите районы Тюмени на карте. Нажмите на метку, чтобы узнать подробнее о локации и вызвать AI-ассистента для получения краткой сводки по району.
                        </p>
                    </div>
                    <div className="bg-stone-800 rounded-2xl shadow-2xl overflow-hidden p-2 md:p-4 border border-stone-700">
                        <div id="yandex-map" ref={mapContainerRef} className="w-full h-[60vh] min-h-[450px] sm:min-h-[500px] rounded-lg bg-stone-700"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Map;
