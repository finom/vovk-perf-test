import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsq")
export default class FsqController {
  @operation({
    summary: "Get Fsq",
  })
  @get()
  static getFsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsq",
  })
  @post("{id}")
  static createFsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
