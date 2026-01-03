import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knus")
export default class KnuController {
  @operation({
    summary: "Get Knus",
  })
  @get()
  static getKnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knu",
  })
  @post("{id}")
  static createKnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
