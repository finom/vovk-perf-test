import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esus")
export default class EsuController {
  @operation({
    summary: "Get Esus",
  })
  @get()
  static getEsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esu",
  })
  @post("{id}")
  static createEsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
