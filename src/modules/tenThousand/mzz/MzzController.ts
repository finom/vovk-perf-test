import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzzes")
export default class MzzController {
  @operation({
    summary: "Get Mzzes",
  })
  @get()
  static getMzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzz",
  })
  @post("{id}")
  static createMzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
