import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efg")
export default class EfgController {
  @operation({
    summary: "Get Efg",
  })
  @get()
  static getEfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efg",
  })
  @post("{id}")
  static createEfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
