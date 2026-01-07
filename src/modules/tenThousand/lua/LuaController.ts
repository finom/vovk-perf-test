import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lua")
export default class LuaController {
  @operation({
    summary: "Get Lua",
  })
  @get()
  static getLua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lua",
  })
  @post("{id}")
  static createLua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
