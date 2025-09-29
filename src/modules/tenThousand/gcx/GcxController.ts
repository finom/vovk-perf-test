import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcxes")
export default class GcxController {
  @operation({
    summary: "Get Gcxes",
  })
  @get()
  static getGcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcx",
  })
  @post("{id}")
  static createGcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
