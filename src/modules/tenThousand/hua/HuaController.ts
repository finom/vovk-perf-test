import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huas")
export default class HuaController {
  @operation({
    summary: "Get Huas",
  })
  @get()
  static getHuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hua",
  })
  @post("{id}")
  static createHua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
