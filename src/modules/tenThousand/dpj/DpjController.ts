import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpjs")
export default class DpjController {
  @operation({
    summary: "Get Dpjs",
  })
  @get()
  static getDpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpj",
  })
  @post("{id}")
  static createDpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
