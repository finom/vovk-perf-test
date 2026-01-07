import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aji")
export default class AjiController {
  @operation({
    summary: "Get Aji",
  })
  @get()
  static getAji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aji",
  })
  @post("{id}")
  static createAji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
