PS E:\Hemavarrrri> cd backend       
PS E:\Hemavarrrri\backend> .venv\Scripts\activate
(backend) PS E:\Hemavarrrri\backend> python ingest.py 
Traceback (most recent call last):
  File "E:\Hemavarrrri\backend\ingest.py", line 4, in <module>
    from qdrant_client import QdrantClient, models
  File "E:\Hemavarrrri\backend\.venv\Lib\site-packages\qdrant_client\__init__.py", line 1, in <module>
    from .async_qdrant_client import AsyncQdrantClient as AsyncQdrantClient
  File "E:\Hemavarrrri\backend\.venv\Lib\site-packages\qdrant_client\async_qdrant_client.py", line 14, in <module>
    import numpy as np
ModuleNotFoundError: No module named 'numpy'
(backend) PS E:\Hemavarrrri\backend> 

