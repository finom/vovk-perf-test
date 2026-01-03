import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgs")
export default class CgController {
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
    summary: "Create Cg",
  })
  @post("{id}")
  static createCg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
