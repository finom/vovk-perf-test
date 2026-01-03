import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcs")
export default class DcsController {
  @operation({
    summary: "Get Dcs",
  })
  @get()
  static getDcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcs",
  })
  @post("{id}")
  static createDcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
