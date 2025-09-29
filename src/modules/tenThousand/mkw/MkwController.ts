import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkws")
export default class MkwController {
  @operation({
    summary: "Get Mkws",
  })
  @get()
  static getMkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkw",
  })
  @post("{id}")
  static createMkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
