import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuas")
export default class KuaController {
  @operation({
    summary: "Get Kuas",
  })
  @get()
  static getKuas = procedure({
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
