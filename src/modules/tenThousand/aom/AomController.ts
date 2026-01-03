import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoms")
export default class AomController {
  @operation({
    summary: "Get Aoms",
  })
  @get()
  static getAoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aom",
  })
  @post("{id}")
  static createAom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
