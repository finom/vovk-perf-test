import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdfs")
export default class HdfController {
  @operation({
    summary: "Get Hdfs",
  })
  @get()
  static getHdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdf",
  })
  @post("{id}")
  static createHdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
