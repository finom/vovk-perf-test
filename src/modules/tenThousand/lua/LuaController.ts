import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luas")
export default class LuaController {
  @operation({
    summary: "Get Luas",
  })
  @get()
  static getLuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lua",
  })
  @post("{id}")
  static createLua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
