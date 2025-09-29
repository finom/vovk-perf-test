import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkxes")
export default class MkxController {
  @operation({
    summary: "Get Mkxes",
  })
  @get()
  static getMkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkx",
  })
  @post("{id}")
  static createMkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
