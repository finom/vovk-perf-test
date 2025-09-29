import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbxes")
export default class BbxController {
  @operation({
    summary: "Get Bbxes",
  })
  @get()
  static getBbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbx",
  })
  @post("{id}")
  static createBbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
