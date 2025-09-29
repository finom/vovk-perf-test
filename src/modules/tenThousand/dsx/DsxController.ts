import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsxes")
export default class DsxController {
  @operation({
    summary: "Get Dsxes",
  })
  @get()
  static getDsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsx",
  })
  @post("{id}")
  static createDsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
