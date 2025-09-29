import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cixes")
export default class CixController {
  @operation({
    summary: "Get Cixes",
  })
  @get()
  static getCixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cix",
  })
  @post("{id}")
  static createCix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
