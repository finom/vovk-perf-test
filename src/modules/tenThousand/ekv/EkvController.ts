import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekv")
export default class EkvController {
  @operation({
    summary: "Get Ekv",
  })
  @get()
  static getEkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekv",
  })
  @post("{id}")
  static createEkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
