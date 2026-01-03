import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekzs")
export default class EkzController {
  @operation({
    summary: "Get Ekzs",
  })
  @get()
  static getEkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekz",
  })
  @post("{id}")
  static createEkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
