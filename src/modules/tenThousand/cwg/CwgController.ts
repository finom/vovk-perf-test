import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwgs")
export default class CwgController {
  @operation({
    summary: "Get Cwgs",
  })
  @get()
  static getCwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwg",
  })
  @post("{id}")
  static createCwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
