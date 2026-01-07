import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lua")
export default class LuaController {
  @operation({
    summary: "Get Lua",
  })
  @get()
  static getLua = procedure({
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
