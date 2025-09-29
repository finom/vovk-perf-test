import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muas")
export default class MuaController {
  @operation({
    summary: "Get Muas",
  })
  @get()
  static getMuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mua",
  })
  @post("{id}")
  static createMua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
