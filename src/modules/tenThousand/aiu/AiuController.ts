import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aius")
export default class AiuController {
  @operation({
    summary: "Get Aius",
  })
  @get()
  static getAius = procedure({
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
