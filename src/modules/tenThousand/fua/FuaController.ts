import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fua")
export default class FuaController {
  @operation({
    summary: "Get Fua",
  })
  @get()
  static getFua = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fua",
  })
  @post("{id}")
  static createFua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
