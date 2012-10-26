rerun = "(There were undefined references|Rerun to get (cross-references|the bars) right)"
latex = pdflatex
doc = js-oop

all: $(doc).pdf

dist: FORCE $(doc).pdf $(doc)-bw.pdf $(doc)-bw-4on1.pdf

$(doc).pdf: $(doc).tex content.tex
	$(latex) $(doc).tex
	(egrep -q $(rerun) $(doc).log && $(latex) $(doc).tex) || true
	(egrep -q $(rerun) $(doc).log && $(latex) $(doc).tex) || true
	
$(doc)-bw.pdf: $(doc)-bw.tex content.tex
	$(latex) $(doc)-bw.tex
	(egrep -q $(rerun) $(doc)-bw.log && $(latex) $(doc)-bw.tex) || true
	(egrep -q $(rerun) $(doc)-bw.log && $(latex) $(doc)-bw.tex) || true
	
$(doc)-bw-4on1.pdf: $(doc)-bw-4on1.tex content.tex
	$(latex) $(doc)-bw-4on1.tex
	(egrep -q $(rerun) $(doc)-bw-4on1.log && $(latex) $(doc)-bw-4on1.tex) || true
	(egrep -q $(rerun) $(doc)-bw-4on1.log && $(latex) $(doc)-bw-4on1.tex) || true

clean:
	rm -f \
		$(doc).log \
		$(doc).out \
		$(doc).nav \
		$(doc).aux \
		$(doc).snm \
		$(doc).toc \
		$(doc).vrb \
		$(doc)-bw.log \
		$(doc)-bw.out \
		$(doc)-bw.nav \
		$(doc)-bw.aux \
		$(doc)-bw.snm \
		$(doc)-bw.toc \
		$(doc)-bw.vrb \
		$(doc)-bw-4on1.log \
		$(doc)-bw-4on1.out \
		$(doc)-bw-4on1.nav \
		$(doc)-bw-4on1.aux \
		$(doc)-bw-4on1.snm \
		$(doc)-bw-4on1.toc \
		$(doc)-bw-4on1.vrb

FORCE:
