import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfus")
export default class MfuController {
  @operation({
    summary: "Get Mfus",
  })
  @get()
  static getMfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfu",
  })
  @post("{id}")
  static createMfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
