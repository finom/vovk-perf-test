import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkcs")
export default class NkcController {
  @operation({
    summary: "Get Nkcs",
  })
  @get()
  static getNkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkc",
  })
  @post("{id}")
  static createNkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
