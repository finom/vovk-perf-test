import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhxes")
export default class LhxController {
  @operation({
    summary: "Get Lhxes",
  })
  @get()
  static getLhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhx",
  })
  @post("{id}")
  static createLhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
