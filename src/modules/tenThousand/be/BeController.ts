import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bes")
export default class BeController {
  @operation({
    summary: "Get Bes",
  })
  @get()
  static getBes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Be",
  })
  @post("{id}")
  static createBe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
