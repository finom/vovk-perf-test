import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbxes")
export default class KbxController {
  @operation({
    summary: "Get Kbxes",
  })
  @get()
  static getKbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbx",
  })
  @post("{id}")
  static createKbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
