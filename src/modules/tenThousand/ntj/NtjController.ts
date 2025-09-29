import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntjs")
export default class NtjController {
  @operation({
    summary: "Get Ntjs",
  })
  @get()
  static getNtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntj",
  })
  @post("{id}")
  static createNtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
