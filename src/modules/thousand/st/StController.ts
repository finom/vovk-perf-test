import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sts")
export default class StController {
  @operation({
    summary: "Get Sts",
  })
  @get()
  static getSts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create St",
  })
  @post("{id}")
  static createSt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
