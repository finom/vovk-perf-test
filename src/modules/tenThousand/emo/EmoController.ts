import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emos")
export default class EmoController {
  @operation({
    summary: "Get Emos",
  })
  @get()
  static getEmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emo",
  })
  @post("{id}")
  static createEmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
