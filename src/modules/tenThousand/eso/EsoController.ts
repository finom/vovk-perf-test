import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eso")
export default class EsoController {
  @operation({
    summary: "Get Eso",
  })
  @get()
  static getEso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eso",
  })
  @post("{id}")
  static createEso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
