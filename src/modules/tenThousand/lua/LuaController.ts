import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
