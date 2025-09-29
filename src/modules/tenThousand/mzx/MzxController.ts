import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzxes")
export default class MzxController {
  @operation({
    summary: "Get Mzxes",
  })
  @get()
  static getMzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzx",
  })
  @post("{id}")
  static createMzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
