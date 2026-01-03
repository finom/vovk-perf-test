import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akas")
export default class AkaController {
  @operation({
    summary: "Get Akas",
  })
  @get()
  static getAkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aka",
  })
  @post("{id}")
  static createAka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
