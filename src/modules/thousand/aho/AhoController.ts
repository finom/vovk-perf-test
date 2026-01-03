import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahos")
export default class AhoController {
  @operation({
    summary: "Get Ahos",
  })
  @get()
  static getAhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aho",
  })
  @post("{id}")
  static createAho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
