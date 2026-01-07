import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekz")
export default class EkzController {
  @operation({
    summary: "Get Ekz",
  })
  @get()
  static getEkz = procedure({
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
