import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmxes")
export default class BmxController {
  @operation({
    summary: "Get Bmxes",
  })
  @get()
  static getBmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmx",
  })
  @post("{id}")
  static createBmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
