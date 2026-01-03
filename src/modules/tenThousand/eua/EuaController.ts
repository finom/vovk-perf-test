import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euas")
export default class EuaController {
  @operation({
    summary: "Get Euas",
  })
  @get()
  static getEuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eua",
  })
  @post("{id}")
  static createEua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
