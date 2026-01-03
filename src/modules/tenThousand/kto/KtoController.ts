import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktos")
export default class KtoController {
  @operation({
    summary: "Get Ktos",
  })
  @get()
  static getKtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kto",
  })
  @post("{id}")
  static createKto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
