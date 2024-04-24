let c = document.createElement('table'); /////////////////
c.style.width = '400px';
c.style.height = '400px';
c.style.border = '4px solid';
c.style.margin = 'auto';
document.body.appendChild(c);
for (let i = 0; i < 8; i++) {
    let d = document.createElement('tr');
    d.style.border = '1px solid';
    c.appendChild(d);
    for (let j = 0; j < 8; j++) {
        let e = document.createElement('th');
        e.style.width = '50px'
        e.style.height = '50px'
        e.setAttribute('id', '' + i + ',' + j)
        if ((i + j) % 2 == 0) {
            e.style.backgroundColor = 'yellow';
        }
        else {
            e.style.backgroundColor = 'chocolate';
        };
        d.appendChild(e);
        if ((i == 0) && (j == 1)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' });
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 1) && (j == 0)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' });
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 2) && (j == 1)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' });
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            a.addEventListener("click", function () {
                document.getElementById('3,0').style.backgroundColor = 'cyan'
                document.getElementById('3,0').style.cursor = 'pointer'
                document.getElementById('3,0').addEventListener('click', function(){
                    document.getElementById('3,0').style.backgroundColor = 'chocolate'
                    document.getElementById('3,0').style.cursor = 'default'
                    document.getElementById('3,2').style.backgroundColor = 'chocolate'
                    document.getElementById('3,2').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.right = '49px'
                    return
                })
            });
            a.addEventListener('click', function () {
                document.getElementById('3,2').style.backgroundColor = 'cyan'
                document.getElementById('3,2').style.cursor = 'pointer'
                document.getElementById('3,2').addEventListener('click', function(){
                    document.getElementById('3,2').style.backgroundColor = 'chocolate'
                    document.getElementById('3,2').style.cursor = 'default'
                    document.getElementById('3,0').style.backgroundColor = 'chocolate'
                    document.getElementById('3,0').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.left = '49px'
                    return
                })
            });
            e.appendChild(a);
        };
        if ((i == 0) && (j == 3)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' })
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 1) && (j == 2)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' })
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 2) && (j == 3)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' });
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            a.addEventListener('click', function () {
                document.getElementById('3,2').style.backgroundColor = 'cyan'
                document.getElementById('3,2').style.cursor = 'pointer'
                document.getElementById('3,2').addEventListener('click', function(){
                    document.getElementById('3,2').style.backgroundColor = 'chocolate'
                    document.getElementById('3,2').style.cursor = 'default'
                    document.getElementById('3,4').style.backgroundColor = 'chocolate'
                    document.getElementById('3,4').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.right = '49px'
                    return
                })
            });
            a.addEventListener('click', function () {
                document.getElementById('3,4').style.backgroundColor = 'cyan'
                document.getElementById('3,4').style.cursor = 'pointer'
                document.getElementById('3,4').addEventListener('click', function(){
                    document.getElementById('3,4').style.backgroundColor = 'chocolate'
                    document.getElementById('3,4').style.cursor = 'default'
                    document.getElementById('3,2').style.backgroundColor = 'chocolate'
                    document.getElementById('3,2').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.left = '49px'
                    return
                })
            });
            e.appendChild(a);
        };
        if ((i == 0) && (j == 5)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' })
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 1) && (j == 4)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' })
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 2) && (j == 5)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' });
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            a.addEventListener('click', function () {
                document.getElementById('3,6').style.backgroundColor = 'cyan'
                document.getElementById('3,6').style.cursor = 'pointer'
                document.getElementById('3,6').addEventListener('click', function(){
                    document.getElementById('3,6').style.backgroundColor = 'chocolate'
                    document.getElementById('3,6').style.cursor = 'default'
                    document.getElementById('3,4').style.backgroundColor = 'chocolate'
                    document.getElementById('3,4').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.left = '49px'
                })
            });
            a.addEventListener('click', function () {
                document.getElementById('3,4').style.backgroundColor = 'cyan'
                document.getElementById('3,4').style.cursor = 'pointer'
                document.getElementById('3,4').addEventListener('click', function(){
                    document.getElementById('3,4').style.backgroundColor = 'chocolate'
                    document.getElementById('3,4').style.cursor = 'default'
                    document.getElementById('3,6').style.backgroundColor = 'chocolate'
                    document.getElementById('3,6').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.right = '49px'
                })
            });
            e.appendChild(a);
        };
        if ((i == 0) && (j == 7)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' })
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 1) && (j == 6)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' })
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            e.appendChild(a);
        };
        if ((i == 2) && (j == 7)) {
            let a = document.createElement('button'); /////////////////
            a.id = 'a' + i + j
            a.style.width = '45px';
            a.style.height = '45px';
            a.style.borderRadius = '30px';
            a.style.margin = 'auto';
            a.style.backgroundColor = 'black';
            a.style.borderColor = 'rgb(147 19 19)';
            a.addEventListener('mouseover', function () { a.style.cursor = 'pointer'; a.style.borderColor = 'rgb(229 66 66)'; a.style.backgroundColor = 'rgb(147 19 19)' });
            a.addEventListener('mouseout', function () { a.style.borderColor = 'rgb(147 19 19)'; a.style.backgroundColor = 'black' });
            a.addEventListener('click', function () {
                document.getElementById('3,6').style.backgroundColor = 'cyan'
                document.getElementById('3,6').style.cursor = 'pointer'
                document.getElementById('3,6').addEventListener('click', function(){
                    document.getElementById('3,6').style.backgroundColor = 'chocolate'
                    document.getElementById('3,6').style.cursor = 'default'
                    document.getElementById('a'+i+j).style.position = 'relative'
                    document.getElementById('a'+i+j).style.top = '55px'
                    document.getElementById('a'+i+j).style.right = '49px'
                })
            });
            e.appendChild(a);
        };
        if ((i == 7) && (j == 0)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 6) && (j == 1)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 5) && (j == 0)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            b.addEventListener('click', function () {
                document.getElementById('4,1').style.backgroundColor = 'cyan'
                document.getElementById('4,1').style.cursor = 'pointer'
                document.getElementById('4,1').addEventListener('click', function () {
                    document.getElementById('4,1').style.backgroundColor = 'chocolate'
                    document.getElementById('4,1').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.left = '49px'
                })
            });
            e.appendChild(b);
        };
        if ((i == 7) && (j == 2)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 6) && (j == 3)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 5) && (j == 2)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            b.addEventListener('click', function () {
                document.getElementById('4,1').style.backgroundColor = 'cyan'
                document.getElementById('4,1').style.cursor = 'pointer'
                document.getElementById('4,1').addEventListener('click', function () {
                    document.getElementById('4,1').style.backgroundColor = 'chocolate'
                    document.getElementById('4,1').style.cursor = 'default'
                    document.getElementById('4,3').style.backgroundColor = 'chocolate'
                    document.getElementById('4,3').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.right = '49px'
                })
            });
            b.addEventListener('click', function () {
                document.getElementById('4,3').style.backgroundColor = 'cyan'
                document.getElementById('4,3').style.cursor = 'pointer'
                document.getElementById('4,3').addEventListener('click', function () {
                    document.getElementById('4,3').style.backgroundColor = 'chocolate'
                    document.getElementById('4,3').style.cursor = 'default'
                    document.getElementById('4,1').style.backgroundColor = 'chocolate'
                    document.getElementById('4,1').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.left = '49px'
                })
            });
            e.appendChild(b);
        };
        if ((i == 7) && (j == 4)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 6) && (j == 5)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 5) && (j == 4)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            b.addEventListener('click', function () {
                document.getElementById('4,3').style.backgroundColor = 'cyan'
                document.getElementById('4,3').style.cursor = 'pointer'
                document.getElementById('4,3').addEventListener('click', function () {
                    document.getElementById('4,3').style.backgroundColor = 'chocolate'
                    document.getElementById('4,3').style.cursor = 'default'
                    document.getElementById('4,5').style.backgroundColor = 'chocolate'
                    document.getElementById('4,5').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.right = '49px'
                })
            });
            b.addEventListener('click', function () {
                document.getElementById('4,5').style.backgroundColor = 'cyan'
                document.getElementById('4,5').style.cursor = 'pointer'
                document.getElementById('4,5').addEventListener('click', function () {
                    document.getElementById('4,5').style.backgroundColor = 'chocolate'
                    document.getElementById('4,5').style.cursor = 'default'
                    document.getElementById('4,3').style.backgroundColor = 'chocolate'
                    document.getElementById('4,3').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.left = '49px'
                })
            });
            e.appendChild(b);
        };
        if ((i == 7) && (j == 6)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 6) && (j == 7)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            e.appendChild(b);
        };
        if ((i == 5) && (j == 6)) {
            let b = document.createElement('button'); ////////////////
            b.id = 'b' + i + j
            b.style.width = '45px';
            b.style.height = '45px';
            b.style.borderRadius = '30px';
            b.style.margin = 'auto';
            b.style.backgroundColor = 'white';
            b.style.borderColor = '#bce9e9';
            b.addEventListener('mouseover', function () { b.style.cursor = 'pointer'; b.style.borderColor = 'rgb(66 229 229)'; b.style.backgroundColor = '#bce9e9' });
            b.addEventListener('mouseout', function () { b.style.borderColor = '#bce9e9'; b.style.backgroundColor = 'white' });
            b.addEventListener('click', function () {
                document.getElementById('4,7').style.backgroundColor = 'cyan'
                document.getElementById('4,7').style.cursor = 'pointer'
                document.getElementById('4,5').style.backgroundColor = 'cyan'
                document.getElementById('4,5').style.cursor = 'pointer'
                document.getElementById('4,7').addEventListener('click', Click1)
                document.getElementById('4,5').addEventListener('click', Click2)
                function Click1() {
                    document.getElementById('4,7').style.backgroundColor = 'chocolate'
                    document.getElementById('4,7').style.cursor = 'default'
                    document.getElementById('4,5').style.backgroundColor = 'chocolate'
                    document.getElementById('4,5').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.left = '49px'
                }
                function Click2() {
                    document.getElementById('4,5').style.backgroundColor = 'chocolate'
                    document.getElementById('4,5').style.cursor = 'default'
                    document.getElementById('4,7').style.backgroundColor = 'chocolate'
                    document.getElementById('4,7').style.cursor = 'default'
                    document.getElementById('b'+i+j).style.position = 'relative'
                    document.getElementById('b'+i+j).style.bottom = '53px'
                    document.getElementById('b'+i+j).style.right = '49px'
                }
            });
            e.appendChild(b);
        };
    };
};