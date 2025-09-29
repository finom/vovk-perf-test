import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bshes")
export default class BshController {
  @operation({
    summary: "Get Bshes",
  })
  @get()
  static getBshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsh",
  })
  @post("{id}")
  static createBsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
