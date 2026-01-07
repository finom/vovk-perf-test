import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kua")
export default class KuaController {
  @operation({
    summary: "Get Kua",
  })
  @get()
  static getKua = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kua",
  })
  @post("{id}")
  static createKua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
