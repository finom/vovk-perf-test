import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpj")
export default class HpjController {
  @operation({
    summary: "Get Hpj",
  })
  @get()
  static getHpj = procedure({
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
