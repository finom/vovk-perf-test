import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbxes")
export default class JbxController {
  @operation({
    summary: "Get Jbxes",
  })
  @get()
  static getJbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbx",
  })
  @post("{id}")
  static createJbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
