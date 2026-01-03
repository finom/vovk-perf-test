import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceas")
export default class CeaController {
  @operation({
    summary: "Get Ceas",
  })
  @get()
  static getCeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cea",
  })
  @post("{id}")
  static createCea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
