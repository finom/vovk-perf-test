import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbts")
export default class BbtController {
  @operation({
    summary: "Get Bbts",
  })
  @get()
  static getBbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbt",
  })
  @post("{id}")
  static createBbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
