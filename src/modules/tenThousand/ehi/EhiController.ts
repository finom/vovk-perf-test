import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehi")
export default class EhiController {
  @operation({
    summary: "Get Ehi",
  })
  @get()
  static getEhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehi",
  })
  @post("{id}")
  static createEhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
