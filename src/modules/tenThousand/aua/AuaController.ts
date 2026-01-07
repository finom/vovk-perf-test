import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aua")
export default class AuaController {
  @operation({
    summary: "Get Aua",
  })
  @get()
  static getAua = procedure({
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
