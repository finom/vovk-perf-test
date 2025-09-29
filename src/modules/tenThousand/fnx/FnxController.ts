import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnxes")
export default class FnxController {
  @operation({
    summary: "Get Fnxes",
  })
  @get()
  static getFnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnx",
  })
  @post("{id}")
  static createFnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
