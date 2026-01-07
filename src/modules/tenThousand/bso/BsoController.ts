import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bso")
export default class BsoController {
  @operation({
    summary: "Get Bso",
  })
  @get()
  static getBso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bso",
  })
  @post("{id}")
  static createBso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
