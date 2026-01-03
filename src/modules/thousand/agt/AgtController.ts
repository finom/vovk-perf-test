import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agts")
export default class AgtController {
  @operation({
    summary: "Get Agts",
  })
  @get()
  static getAgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agt",
  })
  @post("{id}")
  static createAgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
