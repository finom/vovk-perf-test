import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbxes")
export default class CbxController {
  @operation({
    summary: "Get Cbxes",
  })
  @get()
  static getCbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbx",
  })
  @post("{id}")
  static createCbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
