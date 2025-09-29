import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbxes")
export default class HbxController {
  @operation({
    summary: "Get Hbxes",
  })
  @get()
  static getHbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbx",
  })
  @post("{id}")
  static createHbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
