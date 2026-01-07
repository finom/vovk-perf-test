import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eme")
export default class EmeController {
  @operation({
    summary: "Get Eme",
  })
  @get()
  static getEme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eme",
  })
  @post("{id}")
  static createEme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
