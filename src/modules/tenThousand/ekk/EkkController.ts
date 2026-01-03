import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekks")
export default class EkkController {
  @operation({
    summary: "Get Ekks",
  })
  @get()
  static getEkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekk",
  })
  @post("{id}")
  static createEkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
