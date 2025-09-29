import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbxes")
export default class MbxController {
  @operation({
    summary: "Get Mbxes",
  })
  @get()
  static getMbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbx",
  })
  @post("{id}")
  static createMbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
