import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brxes")
export default class BrxController {
  @operation({
    summary: "Get Brxes",
  })
  @get()
  static getBrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brx",
  })
  @post("{id}")
  static createBrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
