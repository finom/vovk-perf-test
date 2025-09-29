import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnxes")
export default class BnxController {
  @operation({
    summary: "Get Bnxes",
  })
  @get()
  static getBnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnx",
  })
  @post("{id}")
  static createBnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
