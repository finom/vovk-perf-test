import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cua")
export default class CuaController {
  @operation({
    summary: "Get Cua",
  })
  @get()
  static getCua = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cua",
  })
  @post("{id}")
  static createCua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
