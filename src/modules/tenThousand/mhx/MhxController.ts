import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhxes")
export default class MhxController {
  @operation({
    summary: "Get Mhxes",
  })
  @get()
  static getMhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhx",
  })
  @post("{id}")
  static createMhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
