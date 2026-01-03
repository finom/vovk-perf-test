import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aifs")
export default class AifController {
  @operation({
    summary: "Get Aifs",
  })
  @get()
  static getAifs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aif",
  })
  @post("{id}")
  static createAif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
