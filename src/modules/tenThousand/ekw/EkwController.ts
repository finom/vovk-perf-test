import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekws")
export default class EkwController {
  @operation({
    summary: "Get Ekws",
  })
  @get()
  static getEkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekw",
  })
  @post("{id}")
  static createEkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
