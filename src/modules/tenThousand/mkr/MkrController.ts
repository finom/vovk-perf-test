import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkrs")
export default class MkrController {
  @operation({
    summary: "Get Mkrs",
  })
  @get()
  static getMkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkr",
  })
  @post("{id}")
  static createMkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
