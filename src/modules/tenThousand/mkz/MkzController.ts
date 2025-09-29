import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkzs")
export default class MkzController {
  @operation({
    summary: "Get Mkzs",
  })
  @get()
  static getMkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkz",
  })
  @post("{id}")
  static createMkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
