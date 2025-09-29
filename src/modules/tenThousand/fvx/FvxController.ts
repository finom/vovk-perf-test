import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvxes")
export default class FvxController {
  @operation({
    summary: "Get Fvxes",
  })
  @get()
  static getFvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvx",
  })
  @post("{id}")
  static createFvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
