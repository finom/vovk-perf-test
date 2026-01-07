import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iua")
export default class IuaController {
  @operation({
    summary: "Get Iua",
  })
  @get()
  static getIua = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iua",
  })
  @post("{id}")
  static createIua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
