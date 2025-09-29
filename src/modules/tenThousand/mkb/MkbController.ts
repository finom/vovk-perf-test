import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkbs")
export default class MkbController {
  @operation({
    summary: "Get Mkbs",
  })
  @get()
  static getMkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkb",
  })
  @post("{id}")
  static createMkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
