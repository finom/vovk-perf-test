import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buas")
export default class BuaController {
  @operation({
    summary: "Get Buas",
  })
  @get()
  static getBuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bua",
  })
  @post("{id}")
  static createBua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
