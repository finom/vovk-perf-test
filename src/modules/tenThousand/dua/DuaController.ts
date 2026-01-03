import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duas")
export default class DuaController {
  @operation({
    summary: "Get Duas",
  })
  @get()
  static getDuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dua",
  })
  @post("{id}")
  static createDua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
