/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://www.wikihow.com/Breathe'>How to Breathe</a></p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'intro': {
		title: 'Halo!',
		subtitle: 'Perkenalkan, nama saya Maghfira. Game ini adalah tugas saya, saya akan minta beberapa data kalian untuk saya data sebagai responden game ini :).',
	},
	'warning': {
		title: 'Perhatian',
		subtitle: 'This game contains depictions of harsh words, and violence, and may not be suitable for all audiences. It also contains bright flashing imagery that may cause discomfort and/or seizures for those with photosensitive epilepsy. Viewer discretion is advised.'
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	"Developers": {
		"Story" : "Inomaru",
		"Art & Assets" : "Inomaru",
		"Music" : "Mistheil",
		"Sfx" : "Inomaru",
		"Scenario Writer" : "Mistheil & Inomaru",
		"Programmer" : "Mistheil"
		
	},

	"Special Thanks to:" : {
		"Friends" : ["JurigAnsos", "Madeby1997"],
		"Lecturer" : "Budi Adi Nugroho, S.Sn., M.Sn.",
		"Lecturer 2" : "Duto Hardono, S.Sn., M.Sn.",
	},

	"And you, the player!" : {}

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'act1music' : 'Out of Place.mp3',
	'act2music' : 'Awkward Atmosphere.mp3',
	'act3music' : 'Guilty Conscience.mp3',
	'act4posmusic' : 'Calming Tides.mp3',
	'act4netmusic' : 'Wishy Washy.mp3',
	'act4negmusic' : 'Rapid Deterioriation.mp3',
	'act4deadmusic' : 'Unsaved Changes.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'disclaimer' : 'disclaimerTTS.mp3',
	'phone' : 'Dering.mp3',
	'humming' : 'Humming.mp3',
	'angryCall' : 'marah.mp3',
	'crying' : 'Meringis.mp3',
	'breathing' : 'Nafas.mp3',
	'static' : 'Static.mp3',
	'whiteNoise' : 'WhiteNoise.mp3' 


});

// Define the videos used in the game.
monogatari.assets ('videos', {


});

// Define the images used in the game.
monogatari.assets ('images', {
	'MejaDefault': 'MejaDefault.png',
	
	


});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'RuangTamu': 'RuangTamu.png',
	'Nightmare': 'Nightmare.png',
	'NightmareRed': 'NightmareRed.gif',
	'FiraGlitching': 'FiraGlitching.gif',
	'BGDistort' : 'BGDistort.gif',
	'BGGlitch1' : 'BGGlitch1.gif',
	'BGGlitch2' : 'BGGlitch2.gif',
	'BGGlitch3' : 'BGGlitch3.gif',
	'BGGlitchGray' : 'BGGlitchGray.gif',

	'FiraDead1' : 'FiraDead1.gif',
	'FiraDead2' : 'FiraDead2.gif',
	'GoodEnd' : 'GoodEnd.gif'
});


// Define the Characters
monogatari.characters ({
	'fira': {
		name: 'Fira',
		color: '#87CEEB',
		sprites: {
			normal: 'FiraDefault.png',
			talking: 'FiraTalking.png',
			annoyed: 'FiraAnnoyed.png',
			angry: 'FiraAngry.png',
			panic: 'FiraPanic.png',
			panicEye: 'FiraPanicEye',
			reading: 'FiraRead.png',
			readingTalking: 'FiraReadTalking.png',
			readingNervous: 'FiraReadNervous.png',
			readingNervousTalking: 'FiraReadNervousTalking.png',
			readingAnnoyed: 'FiraReadAnnoyed.png',
			readingAngry: 'FiraReadAngry.png',
			hit : 'FiraHit.png'

		}
	}
});

monogatari.script ({

	// The game starts here.
	'Start': [
		'show scene #000000 with fadeIn',
		
		
		//Pesan Intro
		'show message intro',

		//Input nama asli
		{
			'Input': {
				'Text': 'Siapa namamu?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							realname: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Masukkan Namamu!'
			}
		},

		//input domisili
		{
			'Input': {
				'Text': 'Domisilimu?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							domisili: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							domisili: ''
						}
					});
				},
				'Warning': 'Masukkan lokasi domisili-mu!'
			}
		},

		'Sip makasih yaw! Selamat menikmati :)',

		//------------------------------------------------------------------------PROLOG----------------------------------------------------------------
		'show scene #181D31 with fadeIn end-fadeOut',
		'play sound disclaimer with volume 70',
		'show message warning',

		'Halo, anak baru',
		'stop sound disclaimer with fade 1',
		'play music act4netmusic with loop fade 1 volume 60',
		'Nama kamu siapa?',		
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},

		

		'Anu...{{player.name}}, kamu sekelompok sama Fira ya?',
		'[Uh iya, ada apa ya?]',

		'Kamu udah tau soal Fira?',

		'Belum? Wah... Hati-hati ya',
		'Rumornya Fira itu ngebunuh anak yang masih bayi, 2 tahun yang lalu',
		'Maka dari itu dia gap year 2 tahun karena ditahan',
		'Awalnya aku juga ga percaya',
		'Pas kita klarifikasi soal itu ke Fira, Fira malah marah dan hampir mukul orang yang nanya.',
		'Aneh memang, kalo dia ga beneran ngelakuin itu, harusnya responnya ga seheboh itu... Kemungkinan besar dia emang ngelakuin itu...',
		'Sekarang dia jadi penyendiri dan kadang suka keliatan main sama anak-anak bermasalah di sekolah',
		'Hati-hati ya, jangan sampe kamu nyinggung dia. Aku khawatir kamu kenapa-napa',



		//------------------------------------------------------------------------ACT 1----------------------------------------------------------------
		'show background RuangTamu with fadeIn end-fadeOut',
		'stop music act4netmusic with fade 3',
		'play music act1music with loop volume 60 fade 3',

		'(Seketika gua keinget kata-kata temen samping gua...)',
		'(Emang belom lama sih gua tau tentang dia, dan keliatan banget orang-orang ga mau deketin dia.)',
		'(Guru pun juga kaya kaga kepengen gubris dia.)',

		'show character fira readingTalking at center with fadeIn',
		'fira Heh.',
		'show character fira reading at center',

		'Hah?! Oh, iya, sori',
		'(Gua ilang dalam pemikiran gua sendiri)',
		'(Fira duduk di seberang, jutek banget)',
		'(Dia cuman sibuk ngeliatin buku pelajaran tanpa menghiraukan gua sama sekali.)',
		'(Kebetulan gua sekelompok sama dia buat presentasi biologi. Deadline masih lusa sih, tapi mager banget sama dia.)',
		'(Waktu tadi ngebahas mau garap tugas dimana, dia acuh ga acuh gitu, jadinya gua ajak dia buat garap di rumah gua...Semoga dia nyaman-nyaman aja)',
		
		'show character fira readingTalking at center',
		'fira Nama lu siapa sih? Lupa gw.',
		'show character fira reading at center',

		'Hah... uh, gw {{player.name}}. Emang kaga dengerin lu dikelompokin sama siapa aja?',
		
		'show character fira readingTalking at center',
		'fira Kaga denger sih tadi gua, toh lu juga yang ngajak gua buat kerkom jadi gua ngikut aja.',
		'show character fira reading at center',

		'(Ya gua tau sih gua baru pindahan dua bulan yang lalu, tapi ga sampe gainget gua samsek dong...)',


		
		

		{
			'Choice': {
				'Dialog': '(...Aduh, canggung banget, ngomongin apa ya?)',
				'act1-1a': {
					'Text': 'Kenapa tadi gamau kerkom dirumahlu aja btw?',
					'Do': 'jump act1-1a'
				},
				'act1-1b': {
					'Text': 'Gua agak lembek di mapel yang ini jadi sori ya kalo gua jadi beban',
					'Do': 'jump act1-1b'
				}
			}
		}
	],

	//------------------------------------------------------------------------ACT 1 - 1 NEGATIVE----------------------------------------------------------------
	'act1-1a': [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},

		'show character fira readingNervousTalking at center',
		'fira gua ga mau aja...Kenapa? Lo tiba-tiba keberatan gua nugas di tempat lo?',
		'show character fira readingNervous at center',

		'Apasih, kaga. Gw cuman penasaran aja pengen main ke rumah lo.',

		'show character fira readingNervousTalking at center ',
		'fira uh...? Kenapa?? ',
		'show character fira readingNervous at center with end-fadeOut ',


		'Kenapa emang? ada yang lo sembunyiin?',
		'...',
		'G-gua becanda, haha',

		'show character fira readingAnnoyed at center with fadeIn end-fadeOut',
		'fira tch.... ga lucu anjing.',
		'(serem...)',
		'show character fira reading at center with fadeIn end-fadeOut',



		'jump act1-2'
	],


	//------------------------------------------------------------------------ACT 1 - 1 POSITIVE----------------------------------------------------------------
	'act1-1b': [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'show character fira readingTalking at center',
		'fira gapapa yang penting usaha dulu aja. Gua juga blom nangkep sepenuhnya.',
		'show character fira reading at center',
		'jump act1-2'
	],


	//------------------------------------------------------------------------ACT 1 - 2----------------------------------------------------------------
	'act1-2' : [
		'Oke...Gua ambil alat tulis, buku, dan semacemnya dulu ya buat persiapan kerkom',
		'(...Fira bahkan ga ngebales perkataan gua...)',

		'show scene #461111 with fadeIn end-fadeOut',
		'(Gua kembali ke kamar gua buat ngambil apa aja yang dibutuhin)',
		'(...Gua sedikit ngerti lama-lama kenapa orang-orang pada gak suka ama dia...)',
		'(Karena rumah bakal kosong sampai malem, jadinya rumah kerasa lebih sunyi)',
		'(Jujur gua agak takut kalo lama-lama sama Fira, beduaan doang)',
		'(Gua lansung buru-buru ngambil buku sama alat tulis gua diatas meja, trus balik ke ruang tamu)',
		'show background RuangTamu with fadeIn end-fadeOut',

		'(Setelah balik, gua ngeliat Fira ngeliatin buku yang dia baca dari tadi, keknya dia bosen...)',
		'show character fira reading at center with fadeIn',
		'(Gua lansung duduk hadap-hadapan sama Fira...',
		
		{
			'Choice': {
				'Dialog': '(...)',
				'act1-3a': {
					'Text': '[Liatin dia lebih lama]',
					'Do': 'jump act1-3a'
				},
				'act1-3b': {
					'Text': 'Ini nih Fir, semoga lengkap ya!',
					'Do': 'jump act1-3b'
				}
			}
		}
	],

	//------------------------------------------------------------------------ACT 1 - 3 NEGATIVE----------------------------------------------------------------
	'act1-3a' : [
		'show scene RuangTamu with fadeIn',
		'stop music act1music with fade 5',
		'play sound whiteNoise with volume 100 fade 1',
		'show scene BGGlitch1',
		'show character fira readingNervous at center',
		'(Dia keliatan sedikit aneh sih, tapi meski kayak gitu gua penasaran banget sama dia sumpah)',
		'Kaya, apakah dia separah itu??? Sekelas pada risih banget gitu sama dia...',
		
		{
			'Choice': {
				'Dialog': '(...)',
				'act1-3a-1': {
					'Text': '[Liatin lebih lama]',
					'Do': 'jump act1-3a-1'
				},
				'act1-3b': {
					'Text': '[Taro barangnya di meja]',
					'Do': 'jump act1-3b',
					'Clickable': function(){return this.storage().sopan}
				}
			}
		}
	],

	'act1-3a-1':[
		//'show scene RuangTamu with fadeIn end-fadeOut',
		'show scene BGGlitch2',
		'show character fira readingNervous at center',
	
		'(Keliatannya dia kaya gapernah ngelakuin hal yang aneh-aneh gitu masa.)',
		'(Tapi emang tubuhnya keliatan kasar gitu sih bisa jadi.)',

		{
			'Choice': {
				'Dialog': '(...)',
				'act1-3a-2': {
					'Text': '[Liatin lebih lama]',
					'Do': 'jump act1-3a-2'
				},
				'act1-3b': {
					'Text': '[Taro barangnya di meja]',
					'Do': 'jump act1-3b',
					'Clickable': function(){return this.storage().sopan}
				}
			}
		}
	],

	'act1-3a-2':[

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},

		
		'show scene BGGlitch3',
		'show character fira readingNervous at center',


		'(...Ah...Anjir...)',
		'(Gua gasengaja ketemu mata dengan dia)',
		'(...Jujur gua gatau sih ketemu mata apa kaga, karena poni-nya yang tebel abis, tapi muka dia ganyaman gitu)',
		'show scene RuangTamu with end-fadeOut',
		'show character fira readingNervousTalking at center',
		'stop sound whiteNoise with fade 1',
		'play music act1music with loop',
		'fira Lo bisa berhenti liatin gua ga?',
		'show character fira readingNervous at center',
		'S-sori, gua denger ada yang ngomongin lo soalnya di kelas, jadinya gua kepo aja sama lo.',
		'fira ...',
		'Oia, btw ini dah gua bawain kebutuhan kita',
		'show character fira readingNervousTalking at center',
		'fira ...Iya...',
		'show character fira readingNervous at center',
		'jump act1-4'
	],




	//------------------------------------------------------------------------ACT 1 - 3 POSITIVE----------------------------------------------------------------
	'act1-3b' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'show character fira readingTalking at center with fadeIn',
		'fira Oke, segini harusnya dah cukup sih. Taro aja dulu.',
		'show character fira readingTalking at center with end-fadeOut',
		'Okeee',
		'(Buku, Alat tulis, perkakas, semua gua taro diatas meja.)',
		'show character fira normal at center with fadeIn end-fadeOut',
		'(Si Fira juga secara on cue, lansung nutup buku yang dia baca dari tadi dan ngerapihin meja.)',
		'(Setelah semua dah ketaro, rasanya dah ancang-ancang buat siap ngerjain tugasnya)',
		'jump act1-4'
	],

	//------------------------------------------------------------------------ACT 1 - 4----------------------------------------------------------------
	'act1-4': [
		'show character fira talking at center',
		{
			'Choice': {
				'Dialog': 'fira Jadi {{player.name}}, mau ngerjain apa kita sekarang',
				'act1-5a': {
					'Text': 'Gatau sih, mau ngobrol aja? Gua pengen kenalan sama lo',
					'Do': 'jump act1-5a'
				},
				'act1-5b': {
					'Text': 'Garap Essay dulu aja sih paling, gimana?',
					'Do': 'jump act1-5b'
				}
			}
		}
	],

	//------------------------------------------------------------------------ACT 1 - 5 NEGATIVE----------------------------------------------------------------
	'act1-5a': [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},

		'fira Gua gamood sori.',
		'show character fira normal at center',
		'Eh? Uh, oke...',
		'show character fira talking at center',
		'fira Lo ngajak gua kesini buat kerja kelompok kan? Bukan buat cipika cipiki sama gua',
		'fira Itu gua liat essay belom digarap, garap itu aja dulu kalo mau.',
		'show character fira normal at center',
		'Oke...',
		'Y-yaudah, kalo gitu nanti tinggal bagi garap essaynya.',
		'(Judes banget buset...)',
		'jump act1-6',
	],

	//------------------------------------------------------------------------ACT 1 - 5 POSITIVE----------------------------------------------------------------
	'act1-5b': [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'fira Yauds, kalo mau.',
		'fira Lo mau garap bagian mana? Biar gua garap yang lainnya.',
		'fira Eh, mending gua ambil pembukaan dulu deh, biar cepet.',
		'show character fira normal at center',
		'Eh? Oke, kalo gitu gua ambil dasar teori aja deh',
		'fira Oke.',
		'(Uwoh, gua ga ngira kalo dia aktif dalam tugas)',
		'Yah... yang penting gua tenang dikit dia ga gimana-gimana.',
		'jump act1-6',
	],






//------------------------------------------------------------------------ACT 1 - 6----------------------------------------------------------------
	'act1-6': [
		'Lu udah tau tapi kita garap apa?',
		'show character fira talking at center with end-fadeOut',
		'fira Ga, kita garap apaan emg?',
		'(Ini anak kaga ngedengerin apa gimana ya...)',
		'Kita lagi belajar struktur manusia, kita kedapetannya reproduksi manusia btw.',
		'show scene BGDistort with fadeIn',
		'show character fira panic with fadeIn end-fadeOut',
		'stop music act1music with fade 5',
		'play sound breathing with volume 80 fade 3 loop',
		'fira H-hah..???',
		'Iya... Kita suruh susun essay sama sesuatu yang buat kita presentasiin di depan kelas. Mayan banyak sih tapi bisa diatur.',
		'fira ...',
		'(Reaksi Fira kaya bener-bener ga nyaman gitu keliatannya.)',
		'Fir? Lu gapapa?',
		'(Fira diem buat beberapa saat)',
		'(Ada apa? Dia gangerti babnya apa gimana?)',
		'(....)',
		'(Oh)',

		{
			'Choice': {
				'Dialog': '(apa ini ada kaitannya sama rumor dia pernah ngebunuh bayi…?)',
				'act1-7a': {
					'Text': '[Provoke]',
					'Do': 'jump act1-7a'
				},
				'act1-7b': {
					'Text': '[Diem]',
					'Do': 'jump act1-7b'
				}
			}
		}
	],

	//------------------------------------------------------------------------ACT 1 - 7 NEGATIVE----------------------------------------------------------------
	'act1-7a': [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},

		'Kenapa Fir? Ini ngingetin lo sama sesuatu?',
		'show ',
		'fira ....Hah..',
		'(Ekspresi dia itu seakan-akan kaya apa yang gua pikirin itu bener)',
		'fira ...',
		'fira ...Apa maksud lo...',
		'show scene RuangTamu',
		'show character fira panic',
		'stop sound breathing with fade 1',
		'(Dia diem sebentar kemudian lansung buka bukunya lagi)',
		'show scene #000000 with fadeIn',
		'jump act2-1'
	],

	//------------------------------------------------------------------------ACT 1 - 7 POSITIVE----------------------------------------------------------------
	'act1-7b': [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'(Gua ngerasa canggung abis buat nanya jadinya gua diem aja.)',
		'(Gua ngebiarin dia diem sejenak sebelum gua tanyain dia lagi.)',
		'...Fira?',
		'show scene RuangTamu with fadeIn end-fadeOut',
		'stop sound breathing with fade 1',
		'fira I-iya, gua fine-fine aja. Ayo, kalo mau mulai garap.',
		'show scene #000000 with fadeIn',
		'jump act2-1'
	],

	//------------------------------------------------------------------------ACT 2----------------------------------------------------------------
	'act2-1': [
		'show background RuangTamu with fadeIn end-fadeOut',
		'stop music act1music with fade 3',
		'play music act2music with loop volume 60 fade 3',
		'show character fira reading at center with fadeIn',
		'(Ruang tamu ini hanya berisi dengan suara tulisan tangan dari kita berdua. Terkadang jeda, tetapi tetap berjalan.)',
		'(Beberapa kali gua curi pandangan ke Fira, dia terlihat linglung tetapi tangannya tetap jalan.)',
		'Setelah gua liat-liat lagi, ini materinya lumayan banyak sih, seenggaknya setengahnya bakal kelar kalo kita kerjain ampe nanti agak maleman',
		'(Mendengar itu, Fira membuka hape ia, kemungkinan besar untuk ngecek jam)',
		'show character fira readingTalking at center',
		'fira Anu...',
		'show character fira reading at center',
		'Ya?',
		'show character fira readingTalking at center',
		'fira Sori ya gua ga bisa lama-lama ngerjainnya',
		'Hah? Kenapa?',
		'fira Ada lah, gua harus ngurus sesuatu',
		'show character fira reading at center',
		'Ohhh...',

		{
			'Choice': {
				'Dialog': '(...Sesuatu?)',
				'act2-2a': {
					'Text': '(Yah, mau gimana...gapapa deh',
					'Do': 'jump act2-2a'
				},
				'act2-2b': {
					'Text': '(Ya elah pengen kabur dari tugas ya lu...)',
					'Do': 'jump act2-2b'
				}
			}
		}
	],

	//------------------------------------------------------------------------ACT 2 - 2 POSITIVE----------------------------------------------------------------
	'act2-2a' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'Yaudah yok garap aja setengahnya dulu hari ini',
		'Biar lo nanti ga kepikiran terus sama progressnya',
		'show character fira readingNervousTalking at center',
		'fira Uh... Um, Oke.',
		'jump act2-3'
	],

	//------------------------------------------------------------------------ACT 2 - 2 NEGATIVE----------------------------------------------------------------
	'act2-2b' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 2
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 2
					}
				});
            }   
		}},

		'Apa sih yang kudu lo kerjain?',
		'show character fira readingNervousTalking at center with end-fadeOut',
		'fira Um... Bukan urusan lo.',
		'Oke tapi gua gasuka ya lo cabut-cabutan. Gua gamau lo konstribusi di awal trus ngilang di akhir.',
		'show character fira readingAngry at center with fadeIn',
		'fira Apa sih?? Gua cuma cabut lebih awal doang!! Bukan ngilang selamanya!!!',
		'(Fira membantingkan tangannya ke meja, marah.)',
		'Oh, tentu lo bilang itu sekarang',
		'show character fira readingAnnoyed at center with end-fadeOut',
		'fira Tch....',
		'(Hah??? Ya gua ga mau capek sendiri anjrit)',
		'jump act2-3'
	],

	//------------------------------------------------------------------------ACT 2 - 3----------------------------------------------------------------
	'act2-3' : [
		'show character fira readingNervousTalking at center with fadeIn',
		'fira Biar lo tenang, gua kerjain sebisa gua dan sebanyak-banyak mungkin',
		'fira Gua usahain bisa kerjain disini sampe sore nanti? Gimana.',
		'Oke',
		'show character fira readingNervous at center with end-fadeOut',
		'(Kemudian kita lansung grasak grusuk ke halaman buku paket buat ngerangkum materi)',

		'show scene #000000 with fadeIn end-fadeOut',
		'(Some time later...)',
		'show scene RuangTamu with fadeIn end-fadeOut',

		'show character fira reading at center with fadeIn',
		'(Progress lancar-lancar aja tapi gua notice Fira selalu ngecek hapenya)',
		'(Walaupun pelan, tapi tetep ada progress...)',
		'(Tapi gua khawatir...)',
		'show character fira readingNervous at center',
		'(Semakin kesini, gua notice dia makin sering ngecek hapenya)',
		'(Walaupun gua penasaran, tapi gua rada gaenakan juga kalo ada sesuatu yang urgent)',

		{
			'Choice': {
				'Dialog': '...',
				'act2-4a': {
					'Text': 'Fir? Ada sesuatu yang penting kah di hape lu?',
					'Do': 'jump act2-4a'
				},
				'act2-4b': {
					'Text': '[Diem]',
					'Do': 'jump act2-4b'
				}
			}
		}

	],

	//------------------------------------------------------------------------ACT 2 - 4 NEGATIVE----------------------------------------------------------------
	'act2-4a' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},

		'show character fira readingNervousTalking at center',
		'fira ...Bukan urusan lu.',
		'show character fira readingNervous at center with end-fadeOut',
		'Tapi lu bolak balik liatin hape teru-',
		'show character fira readingAnnoyed at center with fadeIn end-fadeOut',
		'fira Bukan urusan lu gua bilang! Udah napa, gua tetep fokus garap tugas kok elah',
		'O-oke..',
		'(aduh, kata-kata gua salah lagi, kesannya kaya gua kepo sama urusan dia.)',
		'(ya gua emang kepo sih... tapi...',
		'jump act2-5',
	],

	//------------------------------------------------------------------------ACT 2 - 4 POSITIVE----------------------------------------------------------------
	'act2-4b' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'(Oke, itu bukan urusan gua, gua gaenakan nanyain)',
		'(Positive Thinking aja, paling lagi ngabarin keluarganya atau semacemnya.)',
		'(Pada suatu titik tatapan gua ketemu sama tatapan dia.)',
		'(Seketika panik, dia lansung tutup hapenya dan meletakkannya kembali.)',
		'show character fira readingNervousTalking at center',
		'fira Sori-sori, gua lanjut kerjain...',
		'Keluarga kah?',
		'fira ...Iya...',
		'show character fira readingNervous at center',
		'(Kan bener firasat gua, gausah nethink banget lah ya)',
		'jump act2-5',
	],

	//------------------------------------------------------------------------ACT 2 - 5----------------------------------------------------------------
	'act2-5' : [
		'(Daripada mikirin gituan mending gua lanjut garap bagian gua.)',
		
		//Fade to black
		'show scene #000000 with fadeIn end-fadeOut',
		'(Some time later...)',
		'show scene RuangTamu with fadeIn end-fadeOut',

		'show character fira reading at center with fadeIn',
		'(Sepanjang kerkom masih terasa sangat sunyi, beberapa kali gua mencoba buat cairin suasana dengan iseng nanya ini-itu, tetapi Fira kayanya ga tertarik buat ngobrol)',
		'show character fira readingTalking at center',
		'fira {{player.name}}, ini bagian gua dah mau kelar, lu mau gua garap bagian mana lagi?',
		'show character fira reading at center',
		'O-oh, kalo boleh lu bisa siap-siapin apa yang pengen kita presentasiin, bahan-bahannya dah lengkap nih dibelakang gua.',
		'show character fira readingTalking at center',
		'fira Oke, abis ini gua garap ya',
		'show character fira reading at center',
		'(Gua noleh ke dia, dan dia kembali ke hapenya?)',
		'(...Hm?)',
		//Liatin gamber tangan luka
		'(Di tangannya itu apa? Luka???)',
		'(Dari sini keliatan halus tapi itu beneran bekas luka)',

		{
			'Choice': {
				'Dialog': '...Itu kenapa??',
				'act2-6a': {
					'Text': '[Diam]',
					'Do': 'jump act2-6a'
				},
				'act2-6b': {
					'Text': '[Confront]',
					'Do': 'jump act2-6b'
				}
			}
		}

	],


	//------------------------------------------------------------------------ACT 2 - 6 POSITIVE----------------------------------------------------------------
	'act2-6a' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'(No no no no, its not my bussiness)',
		'jump act2-7'
	],

	//------------------------------------------------------------------------ACT 2 - 6 NEGATIVE----------------------------------------------------------------
	'act2-6b' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},
		
		'Fir, yang ditangan lo itu apa?',
		'show scene BGGlitch2 with fadeIn',
		'stop music act2music with fade 5',
		'play sound whiteNoise with fade 1',
		'show character fira panic at center with fadeIn end-fadeOut',
		'(Fira secara sigap lansung meletakkan hapenya dan menutupi bekas luka di tangannya)',
		'D-Do you cut yourself???',
		'fira ...',
		'fira ...', 
		'fira ...Gua punya kucing dirumah...',
		'(Ok thats obviously a lie)',
		'show scene RuangTamu',
		'stop sound whiteNoise with fade1',
		'show character fira annoyed at center with fadeIn end-fadeOut',
		'fira Udah ah Anjing. Lo nanya-nanya ga jelas lagi gua pukul lo asli',
		'play music act2music with fade 3 volume 60',
		'jump act2-7',
	],


	//------------------------------------------------------------------------ACT 2 - 7----------------------------------------------------------------
	'act2-7' : [
		//Fade to black
		'show scene #000000 with fadeIn end-fadeOut',
		'(Some time later...)',
		'show scene RuangTamu with fadeIn end-fadeOut',

		'show character fira reading at center with fadeIn',
		'play sound phone with volume 40',
		'Setelah itu, sepanjang kerkom hape Fira bergetar terus-terusan, yang bikin dia bolak-balik buat jawab. Jujur at this point gua rada bete ngeliatnya',
		'Fir, sori tapi boleh fokus dulu ga? Biar cepet kelar.',
		'show character fira readingNervousTalking at center with end-fadeOut',
		'fira Iya bentar',
		'play sound phone with volume 40',
		'(Fira mengetik sesuatu di hapenya kemudian lansung nutup hapenya)',
		'(Setelah itu kayanya Fira ganti mode hapenya jadi silent mode, jadi lebih kalem)',
		'(Tapi tiap beberapa menit hape fira geter-geter terus, kayanya dia ditelfon))',
		'(Fira berusaha buat ngehirauin hapenya)',
		'You know what, angkat dulu aja Fir.',
		'show character fira panic at center with fadeIn end-fadeOut',
		'fira O-oke',
		'hide character fira with fadeOut',
		'(Fira ngambil hapenya dan pergi ke kamar mandi)',
		'(Pas pintu di tutup, lansung meledak suara Fira)',
		'play sound angryCall with volume 80 fade 2',
		'(Gua mencoba untuk mendengar pembicaraan dia, tapi suara dia ga begitu jelas karena gema di kamar mandi.)',
		'(Dia nelfon siapa ampe marah-marah gitu yaampun...)',
		'(...)',
		'(.....)',
		'(..........)',
		'(ng?)',
		'(Gua bisa ngerasa ada plastik kecil di kaki gua)',
		'(Gua bangun dari kursi gua dan ngeliat kalo tas Fira kebuka di lantai dengan barang-barangnya sedikit berhamburan)',
		

		{
			'Choice': {
				'Dialog': '(Gua yakin Fira bakal marah kalo gua nyentuh barangnya)',
				'act2-8a': {
					'Text': '[Ambil tasnya dan liat isinya]',
					'Do': 'jump act2-8a'
				},
				'act2-8b': {
					'Text': '[Minggirin barang-barangnya tanpa ngeliat isinya]',
					'Do': 'jump act2-8b'
				}
			}
		}

	],


	//------------------------------------------------------------------------ACT 2 - 8 NEGATIVE----------------------------------------------------------------

	'act2-8a' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 2
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 2
					}
				});
            }   
		}},

	
		'(But still ini tempat gua, kok diberantakin seenak jidat sih...)',
		'(Gua jongkok dan ngambil plastik yang ada di kaki gua)',
		'(Hm?)',
		'stop music act2music with fade 3',
		'play music act3music with loop volume 60 fade 3',
		// Nampilin pill
		'(ini...obat?)',
		'(Gua ngeliat kantong plastik obat dan ga ada label penjelasan mengenai apa obat itu.)',
		'(........)',
		'(Ya tuhan...)',
		'(Tangan gua gemeteran)',
		'(ini obat apa...?)',
		'(atau jangan-jangan...)',
		'...Fira.....',
		'(Tanpa pikir panjang gua lansung buka lebih lebar tas Fira)',
		'(.........)',
		'Ini lebih buruk dari yang gua kira...',
		'Kenapa dia bawa-bawa kondom sama pil kb??',
		'(Gua semakin dalem ngerogoh tas Fira)',
		'(Tangan gua menyentuh permukaan besi)',
		'stop sound angryCall with fade 1',
		'(Penasaran, gw ambil benda itu)',
		'(.....Ada piso lipat)',
		'jump act4neg-1',
	],

	//------------------------------------------------------------------------ACT 2 - 8 POSITIVE----------------------------------------------------------------
	'act2-8b' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'(Gua minggirin barang-barangnya yang dilantai dengan kaki gua)',
		'(hahhhh.... Yang rapih dikit kek jadi orang)',
		'stop sound angryCall with fade 2',
		'jump act3-1'
	],

	//------------------------------------------------------------------------ACT 3----------------------------------------------------------------

	'act3-1' : [
		'stop music act2music with fade 3',
		'play music act3music with loop volume 60 fade 3',
		'(Setelah beberapa lama, Fira keluar dari kamar mandi, dan duduk kembali, mikirin sesuatu)',
		'(Kayanya telpon tadi keliatan penting...)',
		{
			'Choice': {
				'Dialog': '(....)',
				'act3-2a': {
					'Text': '[Diem]',
					'Do':	'jump act3-2a'
				},
				'act3-2b': {
					'Text': '[negor soal telfon tadi.]',
					'Do': 'jump act3-2b'
				}
			}
		}

	],

	//------------------------------------------------------------------------ACT 3 - 2 POSITIVE----------------------------------------------------------------
	'act3-2a' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            }   
		}},

		'(Gua bisa ngeliat kalo dia capek banget dari phone call yang barusan itu...)',
		'fira ...',
		'fira ...{{player.name}}',
		'fira Gua harus cabut sekarang.',
		'Uh, Oke kalo mau',
		'Bagian lo udah lumayan kelar jadi kayanya gapapa',
		'(Gua terlalu takut buat nanyain tadi kenapa. Jadi gapapa deh sampe sini aja kerkomnya)',
		'jump act3-pointcheck'
	],


	//------------------------------------------------------------------------ACT 3 - NEGATIVE----------------------------------------------------------------
	'act3-2b' : [

		{'Function':{
            'Apply': function () {
				const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive - 1
					}
				});
            },

            'Reverse': function () {
                const {positive} = monogatari.storage ('player');
				monogatari.storage ({
					player: {
						positive: positive + 1
					}
				});
            }   
		}},

		'(Gimana sih nelfon teriak-teriak di rumah orang, ga sopan)',
		'Lain kali lo kalo nelfon yang sopan dikit yah.',
		'Ini bukan rumah lo.',
		'fira ....',
		'....Pantes orang-orang pada ngejauhin lo',
		'fira Oke lu lanjut ngomong gua pukul lu ya anjing.',
		'...',
		'jump act3-pointcheck'
	],


	//------------------------------------------------------------------------ACT 3 - POINTCHECK----------------------------------------------------------------
	'act3-pointcheck' : [
		{'Conditional': {
			'Condition': function(){
				if(this.storage().player.positive < 27) {
					return 'normal';
				} else {
					return 'good';
				}
			},
			'normal': 'jump act4net',
			'good': 'jump act4pos',
		}},

	],


	//------------------------------------------------------------------------GOOD ENDING----------------------------------------------------------------
	'act4pos' : [
		'stop music act2music with fade 3',
		'play music act4posmusic with loop volume 60 fade 3',
		'(Fira diem untuk beberapa saat)',
		'fira {{player.name}}, gua....',
		'.........',
		'fira Ugh...',
		'fira ...nevermind',
		'fira ....',
		'..........',
		'(Fira terbangun kemudian mulai packing barang-barangnya)',
		'fira ...',
		'fira ...{{player.name}}',
		'...Ya?',
		'fira ......',
		'fira .........makasih buat hari ini',
		'(Fira lansung cabut dari ruangan, ninggalin gw bengong sendiri)',
		'....',
		'Huh??',
		'show scene GoodEnd with fadeIn end-fadeOut',
		'Tamat...',
		'end'
		//Nampilin Good ending
	],

	//------------------------------------------------------------------------NEUTRAL ENDING----------------------------------------------------------------
	'act4net' : [
		'stop music act3music with fade 3',
		'stop music act4negmusic with fade 3',
		'play music act4netmusic with loop volume 60 fade 3',
		'(Tanpa babibu, Fira packing barang-barang dia)',
		'fira Gua pen cabut',
		'fira hasil tulisan gua nanti gua kirim',
		'fira jangan kontak gua',
		'Hah...?',

		'show scene #000000 with fadeIn end-fadeOut',
		'.....Tamat...?',
		'end'

		//Nampilin Neutral ending
	],

	//------------------------------------------------------------------------BAD ENDING - 1----------------------------------------------------------------
	'act4neg-1' : [
		'stop music act2music with fade 3',
		'stop music act3music with fade 3',
		'play music act4negmusic with loop volume 60 fade 3',
		'show scene #212121 with fadeIn end-fadeOut',
		'(Tiba-tiba pintu kamar mandi kebuka dan Fira dengan jelas ngeliat gua lagi ngebongkar isi tas dia)',
		'fira Lo....ngapain..',
		'fira LO NGAPAIN GUA TANYA',
		'(Fira narik kearah gua dan ngehempas badan gua ke dinding)',
		'fira GUA DARI TADI UDAH SABAR YA SAMA LO',
		'fira KELAKUAN LO GA ADA BEDANYA YA SAMA MEREKA',
		'fira APA YANG KALIAN PENGEN DARI GUA HAH???',
		'....',
		'.........',
		'fira JAWAB GUA SIALAN!!',
		'Barang-barang yang di tas lu',
		'fira ITU URUSAN GUA DAN ITU BARANG GUE',
		'DAN ITU GA JUSTIFIED KENAPA LO BOLEH NGEBUKA TAS GUA YA ANJING',

		{
			'Choice': {
				'Dialog': '(Gua bisa  ngeliat Fira ngepalin tinju dia)',
				'act4neg-2a': {
					'Text': '[Ngalah]',
					'Do': 'jump act4neg-2a'
				},
				'act4-pointcheck': {
					'Text': '[Lawan]',
					'Do': 'jump act4neg-pointcheck'
				}
			}
		}
	],


	//------------------------------------------------------------------------BAD ENDING - POINTCHECK----------------------------------------------------------------
	'act4neg-pointcheck' : [
		{'Conditional': {
			'Condition': function(){
				if(this.storage().player.positive > 12) {
					return 'coward';
				} else {
					return 'bad';
				}
			},
			'coward': 'jump act4neg-2a',
			'bad': 'jump act4neg-2b',
		}},

	],

	//------------------------------------------------------------------------BAD ENDING -> NEUTRAL ENDING----------------------------------------------------------------
	'act4neg-2a' : [
		'(Not gonna lie gua takut)',
		'(Di depan gua ini seseorang yang technically udah pernah ngebunuh orang)',
		'(gua takut...)',
		'M-maaf.....',
		'....',
		'.....',
		'(Fira ngelonggarin cengkraman tangan dia di kerah gua)',
		'fira ....',
		'fira hhhhhhhh',
		'fira Ga ada bedanya lu sama orang-orang bego lainnya yang kepo setengah mampus ke hidup orang lain',
		'fira Dapet apa sih lo dari tau soal hidup gua?',
		'(Fira ngambil barang-barangnya dan masukin semua barang dia ke tas)',
		'jump act4net',
	],


	//------------------------------------------------------------------------BAD ENDING - 2----------------------------------------------------------------
	'act4neg-2b' : [
		'(Apa yang lo lakuin itu salah, Fira)',
		'Gua bakal straightforward ke lo',
		'Lo beneran pernah ngebunuh bayi?',
		'fira ...',
		'Ada rumor kaya gitu soal lo',
		'fira Dan kalian percaya?',
		'Sekarang gua makin yakin setelah ngeliat kelakuan lo',
		'fira ...',
		'fira Bagaimana kalo gua emang beneran ngelakuin?',
		'fira Apa yang bakal kalian lakuin?',
		'H-hah?',
		'fira Dan apa yang bakal lo lakuin kalo emang ternyata engga?',
		'fira Gua capek ya denger semua omongan dari mulut-mulut kalian itu',
		'fira Gua punya alesan tersendiri kenapa gua ga mau konfirmasi omongan mereka',
		'(Tangan fira seakan-akan mau mencekek leher gua)',
		'Tentu lo ga mau konfirmasi karena lo emang ngelakuin itu bukan?',
		'(Gua bisa ngerasa kekuatan tangan Fira makin kenceng)',
		'Gghkk!!',
		'(Tangan gua berusaha ngelepasin cengkraman Fira tapi gabisa)',
		'(Secara insting gua pukul kepalanya cukup keras)',

		'show scene BGGlitchGray with fadeIn end-fadeOut',
		'show character fira hit at center with fadeIn end-fadeOut',
		'(Fira akhirnya ngelepas  tangan dia dari leher gua)',
		'GHAK!!',
		'Hah...Hah...',
		'(Gua jatuh tersungkur sambil berusaha ngambil nafas sebanyak mungkin)',
		'Ghkk....hah....Orang gila....',
		'(Gua bisa ngeliat tatapan Fira penuh amarah)',
		'fira Kalian sendiri yang bilang kalo gua itu pernah ngebunuh bayi kan?',
		'fira Kalo gua udah jadi manusia yang kalian cap hina dan berdosa kenapa gua ga sekalian aja jadi sejelek-jeleknya manusia?',
		'(??????????????)',
		'F-Fira??',
		'(Fira semakin mendekat kearah gua)',
		'fira The shit yang harus gua bopong yang bahkan dari awal bukan salah gua',
		'hide character fira hit',
		'stop music act4negmusic with fade 5',

		'play sound crying with fade 2',
		'fira .....',
		'fira ....hiks',
		'(D-Dia nangis??)',
		'fira Hidup gua bakal jauh dari kata sengsara...... Kalau si bangsat itu ga kaya anjing birahi',
		'(Hah?? Maksudnya apa????)',
		'fira Kalian itu bodoh banget',
		'fira KALIAN BISA GITU KEMAKAN OMONGAN ORANG YANG BAHKAN KALIAN GA TAU DARIMANA ASAL MULANYA',
		'fira Kalian mau gua ngebunuh orang gitu? Biar rumornya jadi kenyataan? Gitu?',
		'show scene #212121 with fadeIn',
		'(Fira ngambil pisau lipet yang terkapar dilantai)',
		'Fira??',
		'FIRA?????',
		'(ngga ngga ngga NGGA NGGA NGGA NGGA NGGA GUA GAMAU MATI)',
		'(Gua pegang pergelangan tangan Fira dan ngedorong dia ke lantai)',
		'(Pisau lipatnya juga berhasil gua rebut dari dia)',
		'play sound crying with fade 1',
		'(....Aneh, padahal tenaga Fira sekuat itu tadi....)',
		'.....',
		'F-Fira??',
		'play music act4deadmusic with loop fade 1',
		'show scene FiraDead1 with end-fadeOut',
		'(Fira ga bergeming)',
		'FIRA????',
		'(...........)',
		'(did I...)',
		'FIR',
		'FIRA',
		'show scene FiraDead2 with end-fadeOut',
		'FIRA MAAF GUA-',
		'khh....',
		'........',
		'...........',
		'...................',
		'.............................',


		//Visual Fira terkapar???
		'show scene #212121 with fadeIn end-fadeOut',
		'...',
		'......',
		'show scene NightmareRed with fadeIn end-fadeOut',
		
		
		
		'Kamu pantes dapetin ini',
		'Kamu ini perempuan hina, jalang',
		'Ini salahmu',
		'Ini semua salahmu',
		'Ini semua ga akan terjadi kalo kamu ga pernah lahir',




		'Apakah kamu ngerasa puas {{player.realname}}?',
		'Apakah semua ending sudah kamu capai?',
		'Apa dengan kamu dapetin ending ini hidupmu bakal berubah?',

		'Bagaimana dengan Fira?',
		'Hidupnya berhenti sampai disini cuma gara-gara rasa ingin tahu kamu.',
		'Ditunggu karmanya di daerah {{player.domisili}} ya.',
		'end'
		//Bad end

	],
});