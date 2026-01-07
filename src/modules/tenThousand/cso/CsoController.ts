import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cso")
export default class CsoController {
  @operation({
    summary: "Get Cso",
  })
  @get()
  static getCso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cso",
  })
  @post("{id}")
  static createCso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
