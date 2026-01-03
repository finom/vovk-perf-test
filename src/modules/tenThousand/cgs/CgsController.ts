import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgs")
export default class CgsController {
  @operation({
    summary: "Get Cgs",
  })
  @get()
  static getCgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgs",
  })
  @post("{id}")
  static createCgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
