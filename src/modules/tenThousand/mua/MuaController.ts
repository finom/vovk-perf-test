import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muas")
export default class MuaController {
  @operation({
    summary: "Get Muas",
  })
  @get()
  static getMuas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mua",
  })
  @post("{id}")
  static createMua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
