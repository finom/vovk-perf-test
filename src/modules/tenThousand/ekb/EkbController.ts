import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekbs")
export default class EkbController {
  @operation({
    summary: "Get Ekbs",
  })
  @get()
  static getEkbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekb",
  })
  @post("{id}")
  static createEkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
