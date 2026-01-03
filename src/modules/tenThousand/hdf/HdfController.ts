import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdfs")
export default class HdfController {
  @operation({
    summary: "Get Hdfs",
  })
  @get()
  static getHdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdf",
  })
  @post("{id}")
  static createHdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
