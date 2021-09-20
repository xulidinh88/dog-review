const data = [
	{
		id: 1,
		avatar: "./img/belarut.jpg",
		name: "Belarut",
		description:
			"Chó chăn cừu Trung Á, hay còn gọi là Netherai, là một giống chó lớn, từ đó nó thổi sức mạnh và sức mạnh. Giống chó này đã qua lựa chọn tự nhiên hàng thế kỷ và nhận được từ tổ tiên tất cả các phẩm chất an ninh và chiến đấu tốt nhất. Ngoài ra, đây là một con chó tự hào và yêu tự do từ Trung Á, đòi hỏi một số kinh nghiệm từ chủ sở hữu.",
		property: "black",
	},
	{
		id: 2,
		avatar: "./img/alaskamalamute.jpg",
		name: "Alaska Malamute",
		description:
			"một giống chó kéo xe ở Alaska. Giống chó được đặt tên theo bộ tộc Mahlemut là Malamute. Chúng thông minh, hiền hòa, luôn biết nghe lời dù là chó cái hay đực và luôn nổi bật trong công việc. Thích trẻ nhỏ và luôn hòa thuận với nhũng vật nuôi khác. Tuy nhiên thường thì Malamute không có thói quen nhặt bóng hay tha đồ vật như một số giống chó săn khác vì mục đích nuôi từ cổ xưa của người Eskimo không vì mục đích săn bắn mà chỉ để kéo xe nên bản tính săn mồi trong nó rất ít. Đặc biệt là không bao giờ tấn công mèo, điều rất khác với đa số các con chó khác",
		property: "black",
	},
	{
		id: 3,
		avatar: "./img/cho-ngao-anh.jpg",
		name: "Chó Ngao Anh",
		description:
			"Chó Ngao Anh là một con chó vô tình gợi lên một cảm giác tôn trọng sâu sắc. Nó là một động vật lớn, mạnh mẽ với nguồn gốc lịch sử sâu sắc và nhiều lần tái sinh",
		property: "black",
	},
	{
		id: 4,
		avatar: "./img/dogoargentino.jpg",
		name: "Dogo Argentino",
		description:
			"Dogo Argentino là một con chó tuyết trắng khá ấn tượng, kết hợp một vẻ ngoài nghiêm khắc, khó tiếp cận và lòng tốt vô biên. Được cung cấp giáo dục thích hợp, chú chó này có thể thực hiện rất nhiều chức năng hữu ích và trở thành không chỉ là thú cưng mà còn là thành viên chính thức của gia đình. Niềm tự hào của Argentina, vì đây là giống chó duy nhất được đăng ký tại đất nước này. Nhiều giống chó Molos đã tham gia vào việc tạo ra nó và họ đã trao tặng chú chó của Argentina tất cả những phẩm chất độc đáo của một chiến binh, một người bảo vệ và một thợ săn.",
		property: "black",
	},
	{
		id: 5,
		avatar: "./img/cho-san-afghanistan.jpg",
		name: "Chó săn Afghanistan",
		description:
			"Đỉnh cao của sự thanh lịch và quý phái, mà bản chất của con chó có thể thưởng, chó săn Afghanistan có tất cả những điều này. Là một giống chó săn trong một thời gian dài, bây giờ nó có thể được nhìn thấy thường xuyên hơn, nằm trên ghế sofa hoặc thanh lịch trên các đấu trường triển lãm uy tín nhất.",
		property: "black",
	},
	{
		id: 6,
		avatar: "./img/cho-nui-bernese.jpg",
		name: "Chó núi Bernese",
		description:
			"Bernas, như những người yêu thích giống chó trìu mến gọi chúng, là những người bạn đồng hành tuyệt vời phù hợp với các gia đình lớn, thân thiện. Và một lần, vào thế kỷ thứ 1 trước Công nguyên, Chó núi Bernese lang thang với bầy đàn trên khắp các đế chế La Mã.",
		property: "black",
	},
	{
		id: 7,
		avatar: "./img/vet-mau.jpg",
		name: 'Bloodhound - "Vết máu"',
		description:
			"Chó săn mạnh mẽ đuổi theo con mồi trên vệt máu và nổi tiếng với bản năng sắc bén. Và mặc dù săn bắn trong Bloodhound là ưu tiên hàng đầu, từ những con chó sặc sỡ như vậy bạn sẽ có được những chú chó gia đình tuyệt vời - với sức thu hút và tính cách của chúng.",
		property: "black",
	},
	{
		id: 8,
		avatar: "./img/dogo.jpg",
		name: "Dogo",
		description:
			"Một con chó lớn với vóc dáng thể thao, hậu duệ của Molossus mạnh mẽ, người hoàn thành tốt công việc của một người bảo vệ, người canh gác và vệ sĩ. Dogue de Bordeaux yêu cầu đào tạo nghiêm túc, nhưng với cách tiếp cận đúng đắn, một người có được một người bạn bốn chân thông minh và không sợ hãi.",
		property: "black",
	},
	{
		id: 9,
		avatar: "./img/beauceron.jpg",
		name: "Beauceron",
		description:
			"Chó chăn cừu Pháp là một giống chó thổ dân độc đáo, được hình thành độc lập, không có bất kỳ hoạt động nào của con người. Số lượng động vật còn ít, ngày nay không có hơn 7000 cá thể, điều này khiến những chú chó này càng hấp dẫn hơn đối với những người hâm mộ các giống chó quý hiếm. Những người quen thuộc với Beauceron, cảm thấy bối rối khi những chú chó thanh lịch và mạnh mẽ như vậy, với vẻ ngoài đáng nhớ và tính tình sáng sủa, đã không giành được danh tiếng trên thế giới",
		property: "black",
	},
	{
		id: 10,
		avatar: "./img/briar.jpg",
		name: "Briard",
		description:
			"Briard là một giống chăn gia súc từ Pháp. Những con chó này không chỉ là những người lao động vĩ đại, mà còn là những sinh vật thông minh nhất, dũng cảm nhất đã trở thành bạn đồng hành tuyệt vời của con người trong thế giới hiện đại. Có kích thước lớn và sự xuất hiện của các giống chó trang trí, chúng thu hút sự chú ý của các nhà lai tạo chó trên khắp thế giới.",
		property: "black",
	},
	{
		id: 11,
		avatar: "./img/bullmastiff.jpg",
		name: "Bullmastiff",
		description:
			"Bullmastiffs - những con chó với vẻ ngoài đáng gờm, nghiêm trọng. Nhưng khá thường xuyên flash các bức ảnh của họ với trẻ nhỏ, mà những người khổng lồ cho phép bất kỳ trò đùa. Làm thế nào sức mạnh và phẩm chất bảo vệ hòa hợp với tính cách của một con chó cùng với sự kiên nhẫn và bình tĩnh? Và điều gì gây ra sự phổ biến của giống chó này?",
		property: "black",
	},
	{
		id: 12,
		avatar: "./img/boerboel.jpg",
		name: "Boerboel Nam Phi",
		description:
			"Boerboel Nam Phi là một giống chó giống chó mastiff có một lịch sử thú vị. Một khi chúng được sử dụng để bảo vệ các trang trại khỏi sự xâm lấn của động vật hoang dã, bao gồm cả sư tử. Tất nhiên, mục đích như vậy để lại dấu ấn của nó đối với nhân vật của con chó, nhưng thời gian cũng làm nhẵn một số góc nhọn.",
		property: "black",
	},
	{
		id: 13,
		avatar: "./img/greyhound.png",
		name: "Greyhound",
		description:
			"Thanh lịch, tinh tế, quý phái - đây là những gì có thể nói khi nhìn vào một đại diện của giống chó Greyhound. Và thực sự, những con chó đến từ Vương quốc Anh có thể đánh tất cả mọi người, nhưng không chỉ bởi vẻ ngoài của chúng. Họ là những vận động viên tuyệt vời, và tốt đến mức họ xứng đáng được liệt kê trong Sách kỷ lục Guinness. Tốc độ tối đa được ghi lại của chó săn thỏ rất ấn tượng - 67,32 km / h. Hơn nữa, kỷ lục về con chó miam của Cindy, cao 1 m 73 cm, vẫn không thể đạt được đối với vật nuôi bốn chân khác.",
		property: "black",
	},
	{
		id: 14,
		avatar: "./img/doberman.jpg",
		name: "Doberman",
		description:
			"Giống chó này, được nhân giống ở Đức, đã có thể trở nên phổ biến trên toàn thế giới. Trước hết, những người yêu thích giống chó bị thu hút bởi vẻ ngoài thanh lịch và nghiêm khắc của họ cùng một lúc. Nhưng trong khi nhân vật của Dobermans không đơn giản như vậy.",
		property: "black",
	},
	{
		id: 15,
		avatar: "./img/golden.jpg",
		name: "Goldens",
		description:
			"Goldens là những con chó không chỉ có màu vàng, mà còn là một nhân vật. Ban đầu là một giống chó săn, đại diện của nó ngày nay đã tìm thấy ơn gọi của mình trong các ngành nghề khác nhau.Vâng, và như một con chó gia đình, con chó này thực hiện hoàn hảo.",
		property: "black",
	},
	{
		id: 16,
		avatar: "./img/ailen.jpg",
		name: "Chó sói Ailen",
		description:
			"Đây là một con chó săn khổng lồ, giống chó xuất hiện từ thời cổ đại. Kể từ đó, xung quanh chó sói Ailen đã phát triển nhiều truyền thuyết và câu chuyện về chủ nghĩa anh hùng và lòng dũng cảm của chúng. Nhưng những người ngưỡng mộ giống chó này chắc chắn rằng đây không phải là những câu chuyện cổ tích, và những con chó thực sự có những phẩm chất tương tự.",
		property: "black",
	},
	{
		id: 17,
		avatar: "./img/ailen-setter.jpg",
		name: "Ailen Setter",
		description:
			"Ailen Setters - niềm tự hào của đất nước họ và giống chó đã giành được danh tiếng thế giới. Xinh đẹp, hiệu quả, thông minh - những phẩm chất này và tạo thành nền tảng cho sự nổi tiếng của những chú chó này. Những con chó xinh đẹp này được trang trí bằng biển quảng cáo, chúng được gỡ bỏ trong quảng cáo và phim.",
		property: "black",
	},
	{
		id: 18,
		avatar: "./img/ngaotbn.jpg",
		name: "Chó ngao Tây Ban Nha",
		description:
			"Đại diện khổng lồ của giống chó này có đầy đủ sự tương phản, bởi vì ngoại hình khắc nghiệt và thậm chí đe dọa của chúng không phù hợp với tính cách của chúng. Chó ngao Tây Ban Nha được mô tả là một con chó thông minh, tận tụy, chu đáo, nhưng không có ác ý và hung dữ.",
		property: "black",
	},
	{
		id: 19,
		avatar: "./img/chochancuudatrang.jpg",
		name: "Chó chăn cừu da trắng ???",
		description:
			"Giống chó bản địa của chó sói da trắng, có đại diện có ngoại hình ghê gớm và tính tình khắc nghiệt. Những con chó khổng lồ này phân biệt rõ ràng giữa chúng và người lạ, nhưng nếu không, làm thế nào chúng trở thành một trong những người canh gác, bảo vệ, bảo vệ tốt nhất? Người chăn cừu da trắng là một con chó nghiêm túc, đòi hỏi cách tiếp cận không kém phần nghiêm trọng.",
		property: "black",
	},
	{
		id: 20,
		avatar: "./img/mia-corso.jpg",
		name: "Mía Corso",
		description:
			"Tổ tiên của những con chó trang nghiêm này là những đấu sĩ thực sự, nhưng ngay cả Canoe Corsos hiện đại cũng không mất đi sự sợ hãi và can đảm. Và mặc dù công việc chăn nuôi đã khiến chúng trở nên dễ chịu hơn, những con chó vẫn cảnh giác và nhân viên bảo vệ chu đáo.",
		property: "black",
	},
	{
		id: 21,
		avatar: "./img/komodor.jpg",
		name: "Komondor",
		description:
			"Sự xuất hiện đáng kinh ngạc của Người chăn cừu Hungary cho phép cô cải trang thành công trong một trong những con cừu của đàn được bảo vệ bởi cô. Nhưng Komondor hoàn toàn không phải là khí chất của cừu, và thậm chí một vài con sói không thể đủ khả năng để chiến đấu với một người chăn cừu ghê gớm và xảo quyệt như vậy.",
		property: "black",
	},
	{
		id: 22,
		avatar: "./img/leonberger.jpg",
		name: "Leonberger",
		description:
			"Trong số các giống dịch vụ, leonberger được phân biệt bởi kích thước lớn và tính khí đờm. Ông là một kết quả thành công của công việc nhân giống để tạo ra một giống chó trông giống như một con sư tử, và đã trở thành một biểu tượng của thành phố Đức cùng tên.",
		property: "black",
	},
	{
		id: 23,
		avatar: "./img/borzoi.jpg",
		name: "Borzoi Nga",
		description:
			"Những con chó của giống chó săn này có bộ lông mượt - con chó mà chúng có tên. Có một thời, mọi chủ đất ở Nga đều coi việc bắt buộc phải có một bầy chó này, như một bằng chứng về sức khỏe của chính họ. Ngày nay, chó săn thỏ Nga có thể được tìm thấy thường xuyên hơn tại các cuộc thi và các vòng triển lãm.",
		property: "black",
	},
	{
		id: 24,
		avatar: "./img/great-danejpg.jpg",
		name: "Great Danes",
		description:
			"Great Dane được gọi là Thế giới Apollo Apollo của thế giới chó, chú chó thực sự nổi bật bởi tầm vóc và vóc dáng hài hòa. Nhưng, ngoài ra, anh ta có những phẩm chất giúp anh ta trở thành một người bảo vệ tuyệt vời, vệ sĩ, giúp thực hiện thành công nhiệm vụ bảo vệ và là người bạn tốt nhất cho tất cả các thành viên trong gia đình.",
		property: "black",
	},
	{
		id: 25,
		avatar: "./img/Newfoundland.jpg",
		name: "Newfoundland",
		description:
			"Người khổng lồ xinh đẹp, điềm tĩnh, tự tin và rất, rất dũng cảm - Newfoundlands. Những con chó này không thờ ơ với bất kỳ người nào và không ở lại mà không chú ý trên đường phố. Mặc dù có kích thước ấn tượng, chó không gây sợ hãi mà chỉ tôn trọng.",
		property: "black",
	},
	{
		id: 26,
		avatar: "./img/schnauzers.jpg",
		name: "Giant Schnauzers",
		description:
			"Những con chó lớn nhất là những con chó mạnh mẽ, trang nghiêm, di động với tính khí cân bằng. Người ta không biết chắc chắn chúng có nguồn gốc từ các mục đồng hay giống chó săn, nhưng hiện tại, Giant Schnauzers được sử dụng thành công như chó dịch vụ.",
		property: "black",
	},
	{
		id: 27,
		avatar: "./img/bernard.jpg",
		name: "St. Bernards",
		description:
			"Những con chó rất phổ biến, thường được sử dụng trong điện ảnh. Cách đây không lâu, St. Bernards đã được sử dụng thành công trong các hoạt động cứu hộ ở địa hình miền núi, ngày nay họ không chỉ là nhân viên cứu hộ, mà còn là diễn viên, bạn đồng hành và thậm chí là bảo mẫu.",
		property: "black",
	},
	{
		id: 28,
		avatar: "./img/ngaotaytangjpg.jpg",
		name: "Chó Ngao Tây Tạng",
		description:
			"Cách đây không lâu, thế giới không nghe về những con chó khổng lồ đáng gờm này, vì các nhà sư Tây Tạng đang tham gia vào việc sinh sản của họ không vội vàng chia sẻ thú cưng sưng húp của họ. Tuy nhiên, khi điều này xảy ra, những con chó ngao Tây Tạng trong chớp mắt đã trở thành những con chó phổ biến và đắt tiền nhất hành tinh.",
		property: "black",
	},
	{
		id: 29,
		avatar: "./img/sucden.jpg",
		name: "Black Russian Terrier",
		description:
			"Black Russian Terrier là một con chó có kích thước khá với vẻ ngoài rất nghiêm túc nhưng rất hiệu quả. Một con thú cưng như vậy thu hút ánh nhìn ngưỡng mộ, nhưng để hiểu những gì trong tâm trí anh ta là vô cùng khó khăn, vì đôi mắt của anh ta được ẩn đằng sau lớp lông.",
		property: "black",
	},
	{
		id: 30,
		avatar: "./img/chomyjpg.jpg",
		name: "American Bulldogs",
		description:
			"Giống chó này được coi là họ hàng gần nhất và ít chạm nhất của chó bulgie Anh cũ. Có hai loại giống - một loại được sử dụng để giữ một con thú lớn, loại kia - là một con chó nông trại. Là kết quả của công việc tuyển chọn, chó bulgie Mỹ hiện đại là một người bảo vệ thận trọng và là người bạn trung thành của gia đình.",
		property: "black",
	},
	{
		id: 31,
		avatar: "./img/pitbul.jpg",
		name: "PitBull Terrier",
		description:
			"Loài này được sinh ra như một vũ khí - không thương tiếc, được sử dụng cho niềm vui đẫm máu của con người. Tuy nhiên, công việc nhân giống dài hạn đã có thể giảm thiểu sự hung hăng, bảo tồn dữ liệu vật lý. Chó PitBull Mỹ bị cấm sinh sản ở nhiều quốc gia, ở những nước khác không phải tất cả đều được phép. Nhưng vấn đề không phải là ác ý của chó, mà là sự bất lực của con người trong việc đối xử với chúng và giáo dục đúng cách.",
		property: "black",
	},
	{
		id: 32,
		avatar: "./img/bulldogeng.jpg",
		name: "English Bulldog",
		description:
			"Loài chó có lịch sử phong phú này đã đi một chặng đường dài - từ những chú chó cưng đến những thú cưng đồng hành. Chó bulgie Anh nổi bật bởi ngoại hình phi thường - chúng ngồi xổm, mạnh mẽ, với cái đầu to và khuôn mặt phẳng. Nhưng, mặc dù nặng, đại diện của giống được coi là quý ông thực sự.",
		property: "black",
	},
	{
		id: 33,
		avatar: "./img/gatronganh.jpg",
		name: "Gà trống anh",
		description:
			"Một con chó với vẻ ngoài dễ chịu đã từng được sử dụng để săn bắn. Ngày nay, nó thường được đặt làm thú cưng của gia đình, bởi vì tên không chính thức của giống chó này là gà trống vui vẻ. Tiếng Anh Cocker Spaniel là một con chó tích cực, tích cực và tốt bụng không thể bị xúc phạm.",
		property: "black",
	},
	{
		id: 34,
		avatar: "./img/chosan.jpg",
		name: "Basset Hound",
		description:
			"Đáng ngạc nhiên, những con chó đờm cứng rắn là chó săn. Sự xuất hiện đáng buồn của chúng không có nghĩa là một dấu hiệu của nỗi buồn, và một số tách ra không có nghĩa là con chó không quan tâm đến những gì đang xảy ra xung quanh.",
		property: "black",
	},
	{
		id: 35,
		avatar: "./img/beagles.jpg",
		name: "Beagles",
		description:
			"Loài chó săn trung bình này có một mùi hương độc đáo ban đầu được sử dụng để săn thỏ rừng và sau đó - cho công việc nghiêm trọng hơn - tìm kiếm chất nổ. Beagles không dành cho những người lười biếng, họ không thể ngồi yên trong một thời gian dài, họ yêu thích các trò chơi, đào tạo và vui vẻ tham gia vào bất kỳ cuộc vui nào.",
		property: "black",
	},
	{
		id: 36,
		avatar: "./img/boxer.jpg",
		name: "Boxer - Võ sĩ người Đức",
		description:
			"Có lẽ trong số những con chó chó, võ sĩ là giống phổ biến nhất. Các nhà lai tạo đã tìm cách để có được những con chó dịch vụ lý tưởng - kỷ luật, khỏe mạnh, với sự hung hăng đầy đủ và trí thông minh cao, và trên thực tế, họ đã làm điều đó.",
		property: "black",
	},
	{
		id: 37,
		avatar: "./img/border.jpg",
		name: "Border Collies",
		description:
			"Border Collies có vẻ ngoài hoàn toàn bình thường nhưng dễ chịu. Tuy nhiên, sự độc đáo của họ không phải là trường hợp. Theo nghiên cứu, trí thông minh Border Collie đang ở mức độ phát triển của trẻ em 3 tuổi.",
		property: "black",
	},
	{
		id: 38,
		avatar: "./img/bulltie.jpg",
		name: "Bull Terrier",
		description:
			"Giống nghiêm trọng, đại diện của chúng đã tham gia vào trận chiến với những con bò đực. Tuy nhiên, vì những mục đích này, cô đã được nhân giống. Chó sục Bull rất thông minh, có thể dễ dàng huấn luyện và hòa đồng với mọi người. Tuy nhiên, trong tay không khéo léo, một con chó có thể trở nên mất kiểm soát và xem xét phẩm chất thể chất tuyệt vời của mình, điều này rất nguy hiểm.",
		property: "black",
	},
	{
		id: 39,
		avatar: "./img/dom.jpg",
		name: "101 chú chó đốm",
		description:
			"Nhiều tiểu bang vẫn khẳng định vai trò của quê hương của những chú chó tuyệt vời này - xinh đẹp, được xây dựng hài hòa và thông minh. Nhưng Dalmatians yêu cầu giáo dục đúng cách, nếu không một con vật cưng có thể thể hiện những đặc điểm rất khó chịu. Do đó, để có được một con chó như vậy là tốt hơn cho những người có kinh nghiệm.",
		property: "black",
	},
	{
		id: 40,
		avatar: "./img/keeshond.jpg",
		name: "Keeshond",
		description:
			"Một giống chó Spitz khá hiếm, có đại diện thích mỉm cười. Giống như các Spitz khác, keeskhonda có vẻ ngoài cảm động, áo khoác lông sang trọng và đuôi ở dạng vòng tròn. Sự tò mò và khéo léo của họ cho phép họ thành thạo các thủ thuật khó nhất, đặc biệt là không gây căng thẳng.",
		property: "black",
	},
	{
		id: 41,
		avatar: "./img/collie.jpg",
		name: "Collie lông dài",
		description:
			"Những người chăn cừu này, mặc dù họ đã mất đi sự nổi tiếng trước đây, nhưng vẫn có nhiều người ngưỡng mộ. Collie lông dài là những con chó có vẻ ngoài thanh lịch, điềm tĩnh và nhạy cảm, bởi vì một khi chúng phải tự mình đưa ra quyết định.",
		property: "black",
	},
	{
		id: 42,
		avatar: "./img/kurtshaar.jpg",
		name: "Kurtshaar",
		description:
			"Đây là một giống cảnh sát độc đáo, có đại diện sẵn sàng tham gia vào bất kỳ cuộc săn nào, bất kể điều kiện thời tiết. Mục đích của chúng ảnh hưởng đến hình dạng vật lý tuyệt vời của những con chó, và sự tương tác của chúng với con người khiến người Kurzha rất dễ chịu và dễ hiểu.",
		property: "black",
	},
	{
		id: 43,
		avatar: "./img/labrador.jpg",
		name: "Labrador",
		description:
			"Giống này là trên dòng hàng đầu của đánh giá phổ biến. Nó có những phẩm chất tương tự như Newfoundlands (họ vẫn là họ hàng gần), nhưng nó có kích thước nhỏ gọn hơn. Labrador tốt bụng, ngoan ngoãn và rất thông minh, họ làm hướng dẫn tốt nhất cho người mù.",
		property: "black",
	},
	{
		id: 44,
		avatar: "./img/huskies.jpg",
		name: "Ngáo đét - Huskies",
		description:
			"Một trong những con chó làm việc hiếm hoi, vẫn chưa mất mục đích. Huskies đang lái chó, cũng như thợ săn, chúng rất phát triển về thể chất và thông minh. Nhưng husky không được khuyến khích để có được những người chủ sẽ không sử dụng thú cưng cho mục đích của nó - những con chó này yêu tự do và không dễ huấn luyện.",
		property: "black",
	},
	{
		id: 45,
		avatar: "./img/schnauzer.jpg",
		name: "Schnauzer",
		description:
			"Các đại diện trung bình của schnauzers râu và brovasti. Một khi chúng được sử dụng để bảo vệ và tiêu diệt loài gặm nhấm, do đó, thanh kiếm bảo vệ khá phát triển trong các schnauzers giữa. Một trong những tính năng đặc biệt của những chú chó này là hoạt động chưa từng có của chúng, chúng cần các trò chơi và huấn luyện thường xuyên.",
		property: "black",
	},
	{
		id: 46,
		avatar: "./img/jagdterrier.jpg",
		name: "Jagdterrie",
		description:
			"Một giống chó săn săn quý hiếm, chỉ xuất hiện vào những năm 20 của thế kỷ trước. Các nhà lai tạo đã cố gắng để có được những con chó làm việc tuyệt vời, và jagdterrier vẫn phải chịu sự kiểm tra bắt buộc về phẩm chất cụ thể của chúng.",
		property: "black",
	},
	{
		id: 47,
		avatar: "./img/novo-scotland.jpg",
		name: "Chó săn mồi Tây Scotland",
		description:
			"Mặc dù giống đã được nhân giống tương đối gần đây, mục đích của nó vẫn còn gây tranh cãi. Nhưng thực tế rằng Tollers là thợ săn vịt xuất sắc không nghi ngờ gì. Ngoài ra, chó tha mồi Novo-Scotland có phẩm chất bảo vệ rõ rệt.",
		property: "black",
	},
	{
		id: 48,
		avatar: "img/chochancuuduc.jpg",
		name: "Chó chăn cừu Đức",
		description:
			"Nếu bạn hỏi mọi người tên của giống chó phổ biến nhất, thì rất có thể, hầu hết sẽ gọi nó. Và vì vậy mà nhiều trẻ em mơ về một chú chó chăn cừu Đức , điều này không còn nghi ngờ gì nữa. Cho đến ngày nay, chúng được coi là những chú chó tìm kiếm dịch vụ tốt nhất và danh hiệu này không quá dễ kiếm.",
		property: "black",
	},
	{
		id: 49,
		avatar: "./img/contro.jpg",
		name: "Con trỏ",
		description:
			"Giống chó săn cổ xưa nhất của Anh, có đại diện kết hợp vẻ ngoài quý phái, tự tin và trí thông minh tiên tiến. Một lần, Con trỏ được cho là những con chó khá hung dữ, nhưng nhờ có sự sinh sản, chúng trở nên ngoan ngoãn và tình cảm hơn.",
		property: "black",
	},
	{
		id: 50,
		avatar: "./img/rott.jpg",
		name: "Rottweiler",
		description:
			"Dịch vụ giống chó đã được phổ biến trên toàn thế giới. Ngày nay, Rottweilers , những con chó mạnh mẽ với vẻ ngoài đáng gờm này, được sử dụng trong các dịch vụ khác nhau, được đưa lên để bảo vệ và làm bạn đồng hành. Nhưng điều đáng ghi nhớ là những con chó lớn như vậy với phẩm chất bảo vệ rõ rệt cần được xã hội hóa và giáo dục.",
		property: "black",
	},
	{
		id: 51,
		avatar: "./img/samoyed.jpg",
		name: "Chó Samoyed",
		description:
			"Chó Samoyed hay Arctic Spitz - một con chó trắng xinh đẹp từng sống ở các bộ lạc du mục phía bắc - chăn thả gia súc, săn bắn, lái xe trượt tuyết, và thậm chí theo dõi những đứa trẻ của chủ. Và mặc dù con chó Samoyed đã không mất đi phẩm chất làm việc của nó, ngày nay nó thường có thể được tìm thấy tại các triển lãm.",
		property: "black",
	},
	{
		id: 52,
		avatar: "./img/huskysiberian.jpg",
		name: "Siberian Husky",
		description:
			"Giống chó, được lai tạo từ những con chó thổ dân ở vùng Viễn Đông của Nga. Ngày nay, cô có rất nhiều người ngưỡng mộ, nhưng chủ nhân tương lai nên biết - Siberian Huskies - những chú chó làm việc coi trọng sự tự do và yêu thích công việc.",
		property: "black",
	},
	{
		id: 53,
		avatar: "./img/chowchow.jpg",
		name: "Chow Chow",
		description:
			"Những con chó gấu Trung Quốc đòi hỏi một cách tiếp cận đặc biệt. Mặc dù thực tế là những con chó của giống chó này hoàn toàn không giống với tổ tiên hoang dã của chúng, DNA của chúng càng gần càng tốt với DNA của chó sói. Trong nhiều thế kỷ, Chow Chows được nhân giống trong các tu viện của Trung Quốc, và nhờ sự cô lập của chúng, chúng vẫn giữ được hình dáng ban đầu.",
		property: "black",
	},
	{
		id: 54,
		avatar: "./img/tiepkhac.jpg",
		name: "Chó sói Tiệp Khắc",
		description:
			"Mọi người trong một thời gian dài quay trở lại vấn đề nuôi một con chó lai và một con sói. Và mặc dù hai loài này gần gũi về mặt di truyền, không thể có được một con chó đầy đủ với phẩm chất sói độc đáo. Sói Tiệp Khắc có thể được gọi là con lai thành công nhất, được Liên đoàn chó quốc tế công nhận.",
		property: "black",
	},
	{
		id: 55,
		avatar: "./img/sharpei.jpg",
		name: "Shar Pei",
		description:
			"Một trong những giống chó Trung Quốc mơ hồ là Shar Pei , kết hợp vẻ ngoài khá hài hước với tính cách nghiêm túc. Thật khó tin, nhưng những con chó nhỏ vui nhộn với nhiều nếp gấp trên da, trên thực tế, là những người canh gác và bảo vệ đáng gờm.",
		property: "black",
	},
	{
		id: 56,
		avatar: "./img/aire.jpg",
		name: "Airedale Terrier",
		description:
			"Những con chó này được đưa ra ngoài để săn bắn, và chúng đã đối phó tốt với nhiệm vụ của mình. Sau đó, sự tinh tế tuyệt vời của chúng rất hữu ích khi làm việc trong cảnh sát, và sau đó - chúng biến thành những con chó đồng hành. Chó sục Airedale rất năng động, ham học hỏi và tính tình, do đó, không nên bắt đầu chúng với những người đồng tính - con chó chắc chắn sẽ chán.",
		property: "black",
	},
	{
		id: 57,
		avatar: "./img/basenji.jpg",
		name: "Basenji",
		description:
			"Giống chó tuyệt vời, nó còn được gọi là chó sủa Châu Phi, mà các bộ lạc ở châu Phi vẫn sử dụng để săn sư tử! Các basenjies không sủa, nhưng tạo ra nhiều âm thanh - tiếng kêu, tiếng meo, tiếng hú, và hơn nữa, những con chó này rửa mặt như mèo.",
		property: "black",
	},
	{
		id: 58,
		avatar: "./img/brussels.jpg",
		name: "Brussels",
		description:
			"Giống chó Bỉ trang trí, với một tinh nghịch, và ở một số nơi, xuất hiện hài hước. Từng là những vị vua yêu thích của các vị vua, nhưng ngày nay, bất cứ ai cũng có thể tạo ra một món thịt bò Brussels ngon và hài hước như vậy.",
		property: "black",
	},
	{
		id: 59,
		avatar: "./img/wale.jpg",
		name: "Welsh Corgi",
		description:
			"Đây là những con chó chăn cừu nhỏ, chỉ có kích thước nhỏ hơn những con lớn hơn của chúng. Khi thực hiện công việc của người chăn cừu, họ đã cố gắng cắn gia súc bằng tay chân, đẩy chúng về phía đàn và không rơi xuống dưới móng. Có hai loại giống chó xứ Wales Korgov - cardigan và pembroke, loại đầu tiên lớn hơn và nghiêm trọng hơn, nhưng loại thứ hai chỉ là loại niềm vui.",
		property: "black",
	},
	{
		id: 60,
		avatar: "./img/jack.jpg",
		name: "Jack Russell",
		description:
			"Ban đầu, những con chó được lai tạo để săn burrow, và không khó để chúng xua đuổi bất kỳ động vật nào, hướng chúng vào tay một thợ săn. Nhưng sự nhanh trí, hoạt động và vui vẻ đã cho phép Jack Russell Terrier trở thành một chú chó đồng hành tuyệt vời.",
		property: "black",
	},
	{
		id: 61,
		avatar: "./img/york.jpg",
		name: "Yorkshire Terrier",
		description:
			"Trong số các mảnh vụn trang trí, Yorkshire Terrier là nơi đầu tiên phổ biến. Thoạt nhìn có vẻ như những sinh vật đáng yêu này được nhân giống để làm hài lòng chủ nhân của chúng, nhưng không. Một khi yorkies được giữ trong các mỏ than và chiến đấu với loài gặm nhấm khổng lồ.",
		property: "black",
	},
	{
		id: 62,
		avatar: "./img/mao.jpg",
		name: "Chó mào Trung Quốc",
		description:
			"Con chó của giống chó này ngày nay có thể được tìm thấy ở bất kỳ tiểu bang nào, ngay cả với khí hậu không ấm lắm. Và, một cách tự nhiên, con chó, có tối thiểu len, luôn thu hút sự chú ý của người khác. Nhân tiện, ở Trung Quốc, con chó mào Trung Quốc là biểu tượng của hạnh phúc gia đình.",
		property: "black",
	},
	{
		id: 61,
		avatar: "./img/y.jpg",
		name: "Chó săn thỏ Ý",
		description:
			"Chú chó nhỏ màu xám này với cấu trúc cơ thể duyên dáng và khuôn mặt dễ thương hấp dẫn chỉ gây ra cảm xúc tích cực. Chó săn thỏ Ý có khứu giác nhạy bén, thị lực và khả năng chạy nhanh, nhưng vẫn là ơn gọi của cô là làm bạn đồng hành và là người bạn với con người.",
		property: "black",
	},
	{
		id: 62,
		avatar: "./img/lhada.jpg",
		name: "Lhasa apso",
		description:
			"Giống chó già nhất với vẻ ngoài ngộ nghĩnh và dễ thương. Chắc chắn, lhaso-apso gây ra một nụ cười, và chủ sở hữu của họ nhất trí lập luận rằng không có khả năng tìm thấy một người bạn bốn chân nhạy cảm và thông minh hơn. Một khi họ bảo vệ các tu viện, vì vậy thú cưng luôn chào đón những vị khách thú cưng bằng một tiếng sủa.",
		property: "black",
	},
	{
		id: 63,
		avatar: "./img/PitzanianSpitz.jpg",
		name: "Pitzanian Spitz",
		description:
			"Con chó này có sự xuất hiện của đồ chơi và thực sự, một con thú cưng như vậy có thể được tạo ra cho một đứa trẻ. Spitz nhanh chóng được gắn liền với chủ sở hữu của nó, nhưng sẽ không chịu được sự bất cẩn. Ngoài ra, mảnh vụn này cho thấy sự cảnh giác và thậm chí có thể vội vàng để bảo vệ chủ sở hữu của nó.",
		property: "black",
	},
	{
		id: 64,
		avatar: "./img/malta.jpg",
		name: "Chó Malta",
		description:
			"Đại diện của giống chó này được gọi là những con chó trang trí đẹp nhất. Len sang trọng màu trắng như tuyết, đôi mắt tròn và nút đen của họ không thể khiến bất cứ ai thờ ơ. Chó lap-Malta là sinh vật rất vui tươi, tình cảm mà ngay cả những người mới bắt đầu cũng có thể lên dây cót.",
		property: "black",
	},
	{
		id: 65,
		avatar: "./img/pug.jpg",
		name: "Chó Pug",
		description:
			"Những con chó nhỏ với khuôn mặt nhỏ nhắn ngộ nghĩnh này từng bảo vệ các ngôi đền, tất nhiên, vào thời điểm đó chúng có phần lớn hơn. Một con pug hiện đại cũng sẽ bảo vệ chủ nhân của nó, nhưng nếu chúng leo lên đầu gối hoặc ngồi dưới chân TV.",
		property: "black",
	},
	{
		id: 66,
		avatar: "./img/khua.jpg",
		name: "Chó Bắc Kinh",
		description:
			"Các giống chó lâu đời nhất của Trung Quốc, xung quanh có rất nhiều truyền thuyết. Ví dụ, ở một trong số họ, người Bắc Kinh xuất thân từ sư tử và bướm, mặt khác - một con sư tử và một con khỉ. Ở quốc gia cổ đại, chỉ có hoàng đế và đại diện của các gia đình quý tộc mới có thể có người Bắc Kinh . Khi Trung Quốc thoát khỏi sự cô lập, các thành viên của giống chó này nhanh chóng nổi tiếng và lan rộng khắp thế giới.",
		property: "black",
	},
	{
		id: 67,
		avatar: "./img/nocu.jpg",
		name: "Chó không lông Peru",
		description:
			"Tại nhà ở Peru, nó được coi là một con vật linh thiêng và tin vào đặc tính kỳ diệu của một con chó. Đúng như tên gọi, đại diện của giống chó này không có lông, điều này chắc chắn mang lại cho chúng một diện mạo nguyên bản. Chó không lông Peru là một động vật hiền lành với tính khí điềm tĩnh, một con chó đồng hành lý tưởng.",
		property: "black",
	},
	{
		id: 68,
		avatar: "./img/poodles.jpg",
		name: "Poodles",
		description:
			"Một trong những giống phổ biến nhất mà đại diện đứng ở vị trí thứ hai về khả năng trí tuệ. Có một số loại giống, nhưng tất cả chúng được phân biệt bằng len không gây dị ứng xoăn. Poodles thích tìm hiểu, có lẽ đó là lý do tại sao chúng thường được tìm thấy trong các màn biểu diễn xiếc.",
		property: "black",
	},
	{
		id: 69,
		avatar: "./img/Dachshund.jpg",
		name: "Dachshund",
		description:
			"Thợ săn chân ngắn Norn đã trở nên nổi tiếng trên toàn thế giới. Dachshund rất tò mò, tò mò và vui tươi, tuy nhiên, chủ sở hữu nên chú ý hơn trên đường chạy, vì bản năng săn mồi của thú cưng có thể đột nhiên chơi.",
		property: "black",
	},
	{
		id: 70,
		avatar: "./img/cao.jpg",
		name: "Cáo - Fox Terrier",
		description:
			"Giống chó, được nhân giống để đào hang, ngày nay đóng vai trò thành công trong một gia đình thú cưng. Chó sục Fox cực kỳ năng động, vui vẻ và tinh nghịch, vì vậy đi bộ với thú cưng như vậy sẽ không bao giờ nhàm chán. Chủ sở hữu sẽ phải chú ý đến người bạn bốn chân của mình, nếu không anh ta có thể là một thảm họa thực sự cho nhà ở.",
		property: "black",
	},
	{
		id: 71,
		avatar: "./img/bulede.jpg",
		name: "Bulebe Pháp",
		description:
			"Những con chó nhỏ, nhút nhát với đôi mắt chăm chú có trí thông minh cao. Điều này cho phép họ dễ dàng xây dựng mối quan hệ với tất cả các thành viên trong gia đình, nhưng để đào tạo, phát triển khả năng tinh thần có thể gây hại. Thực tế là bulebe Pháp hiểu những gì họ muốn từ anh ta, nhưng anh ta không chắc chắn rằng anh ta cần nó. Các chủ sở hữu cần phải thúc đẩy đúng cách xảo quyệt này.",
		property: "black",
	},
	{
		id: 72,
		avatar: "./img/chnauzer.jpg",
		name: "Miniature Schnauzer",
		description:
			"Nhỏ nhất, nhanh nhẹn và không ngừng nghỉ trong số các schnauzers, những người cùng với các đối tác lớn hơn của họ có thể làm công việc chính thức. Cho rằng chúng là một cục năng lượng, bạn sẽ không cảm thấy nhàm chán với nó, nhưng bạn cần một bàn tay vững chắc để chứa sự hăng hái của thú cưng.",
		property: "black",
	},
	{
		id: 73,
		avatar: "./img/chihuahua.jpg",
		name: "Chihuahua",
		description:
			"Con chó nhỏ bé này có thể được gặp trong một sự kiện xã hội, bởi vì đi cùng với chủ của nó là trách nhiệm trực tiếp của nó. Không có tình cảm, sự chú ý và thiện chí chó mòn mỏi. Do đó, việc chọn một con chihuahua làm thú cưng nên tính đến việc em bé không thể ở một mình trong một thời gian dài.",
		property: "black",
	},
	{
		id: 74,
		avatar: "./img/sheltie.jpg",
		name: "Sheltie",
		description:
			"Sheltie - chó chăn gia súc Scotland, người đã đối phó thành công với công việc này. Nhiều người coi chúng là một loại collie, tuy nhiên, hai giống được phát triển song song. Để cải thiện chất lượng của những chú chó nhỏ này, người chăn cừu Scotland đã được sử dụng trong công việc chăn nuôi.",
		property: "black",
	},
	{
		id: 75,
		avatar: "./img/shih.jpg",
		name: "Shih tzu",
		description:
			"Giống chó Trung Quốc với vẻ ngoài sang trọng, sự yên tĩnh của hoàng gia và một chút kiêu ngạo trong mắt anh ta. Điều đó không có gì đáng ngạc nhiên, vì trong một thời gian dài, những con chó-sư tử bị cấm giữ những người phàm trần, và chúng sống độc quyền trong các cung điện hoàng gia. Một shih tzu hiện đại là một con chó gia đình độc quyền, người thích ở trung tâm của sự chú ý.",
		property: "black",
	},
	{
		id: 76,
		avatar: "./img/scoth.jpg",
		name: "Chó sục Scotland",
		description:
			"Chó sục nhỏ đến từ Scotland này là một thợ săn khá thành công, và hôm nay anh ta đã biến thành thú cưng. Tuy nhiên, chó sục scotch đã không biến mất bản năng và thói quen của mình, về những chủ sở hữu trong tương lai nên biết trước.",
		property: "black",
	},
	{
		id: 77,
		avatar: "./img/japan.jpg",
		name: "Hin Nhật Bản",
		description:
			"Tên của giống chó này được dịch là 'con chó quý', nhưng nó không được biết chắc chắn nơi nó có nguồn gốc - ở Tây Tạng hoặc ở Nhật Bản. Hin Nhật Bản là một con chó con trang trí, mặc dù kích thước khiêm tốn của nó, có thể tự đứng lên và chủ sở hữu của nó.",
		property: "black",
	},
	{
		id: 78,
		avatar: "./img/phu.jpg",
		name: "Chó Phú Quốc",
		description:
			"Chó Phú Quốc là giống chó nổi tiếng của đảo Phú Quốc, tỉnh Kiên Giang, Việt Nam. Chó nổi tiếng bởi sự thông minh, gan dạ và trung thành. Đặc điểm nổi bật là có xoáy dọc sống lưng. Chó xoáy của Pháp, chó xoáy Thái Lan,… cũng có đặc điểm lông xoáy giống chó Phú Quốc.",
		property: "black",
	},
];

function randomItem(max) {
	return Math.floor(Math.random() * max);
}

let currentItem = randomItem(data.length - 1);
console.log(currentItem);
var imgUser = document.querySelector(".avatar__img");
var nameUser = document.querySelector(".name__content");
var descriptionUser = document.querySelector(".description__content");
var btns = document.querySelectorAll(".btn");
var btnLike = document.querySelector(".btn--like");
window.addEventListener("DOMContentLoaded", function () {
	showPerson(currentItem);
});

function showPerson(person) {
	const item = data[person];
	imgUser.style.backgroundImage = `url("${item.avatar}")`;
	nameUser.textContent = item.name;
	descriptionUser.textContent = item.description;
	btnLike.style.color = item.property;
}

btns.forEach(function (btn) {
	btn.onclick = function (e) {
		let currentBtn = e.currentTarget.classList;
		if (currentBtn.contains("btn-prev")) {
			currentItem--;
			if (currentItem < 0) {
				currentItem = data.length - 1;
			}
			showPerson(currentItem);
		} else if (currentBtn.contains("btn-heart")) {
			if (data[currentItem].property == "red") {
				data[currentItem].property = "black";
			} else {
				data[currentItem].property = "red";
			}
			showPerson(currentItem);
		} else {
			currentItem++;
			if (currentItem > data.length - 1) {
				currentItem = 0;
			}
			showPerson(currentItem);
		}
	};
});
