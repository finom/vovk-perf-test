import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkhs")
export default class MkhController {
  @operation({
    summary: "Get Mkhs",
  })
  @get()
  static getMkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkh",
  })
  @post("{id}")
  static createMkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
