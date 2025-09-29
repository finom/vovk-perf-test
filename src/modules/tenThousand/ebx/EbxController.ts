import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebxes")
export default class EbxController {
  @operation({
    summary: "Get Ebxes",
  })
  @get()
  static getEbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebx",
  })
  @post("{id}")
  static createEbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
