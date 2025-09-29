import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhns")
export default class NhnController {
  @operation({
    summary: "Get Nhns",
  })
  @get()
  static getNhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhn",
  })
  @post("{id}")
  static createNhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
