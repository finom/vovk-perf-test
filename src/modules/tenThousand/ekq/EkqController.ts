import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekq")
export default class EkqController {
  @operation({
    summary: "Get Ekq",
  })
  @get()
  static getEkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekq",
  })
  @post("{id}")
  static createEkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
