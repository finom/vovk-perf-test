import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbxes")
export default class LbxController {
  @operation({
    summary: "Get Lbxes",
  })
  @get()
  static getLbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbx",
  })
  @post("{id}")
  static createLbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
