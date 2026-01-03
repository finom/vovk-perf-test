import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpjs")
export default class HpjController {
  @operation({
    summary: "Get Hpjs",
  })
  @get()
  static getHpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpj",
  })
  @post("{id}")
  static createHpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
