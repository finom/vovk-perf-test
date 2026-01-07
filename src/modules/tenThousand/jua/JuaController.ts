import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jua")
export default class JuaController {
  @operation({
    summary: "Get Jua",
  })
  @get()
  static getJua = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jua",
  })
  @post("{id}")
  static createJua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
