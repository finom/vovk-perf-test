import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekqs")
export default class EkqController {
  @operation({
    summary: "Get Ekqs",
  })
  @get()
  static getEkqs = procedure({
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
