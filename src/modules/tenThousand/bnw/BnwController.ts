import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnws")
export default class BnwController {
  @operation({
    summary: "Get Bnws",
  })
  @get()
  static getBnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnw",
  })
  @post("{id}")
  static createBnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
