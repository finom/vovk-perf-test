import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzxes")
export default class BzxController {
  @operation({
    summary: "Get Bzxes",
  })
  @get()
  static getBzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzx",
  })
  @post("{id}")
  static createBzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
