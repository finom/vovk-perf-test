import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auas")
export default class AuaController {
  @operation({
    summary: "Get Auas",
  })
  @get()
  static getAuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aua",
  })
  @post("{id}")
  static createAua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
