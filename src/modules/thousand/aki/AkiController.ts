import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akis")
export default class AkiController {
  @operation({
    summary: "Get Akis",
  })
  @get()
  static getAkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aki",
  })
  @post("{id}")
  static createAki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
