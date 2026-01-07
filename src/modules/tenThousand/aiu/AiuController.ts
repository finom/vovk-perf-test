import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiu")
export default class AiuController {
  @operation({
    summary: "Get Aiu",
  })
  @get()
  static getAiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aiu",
  })
  @post("{id}")
  static createAiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
