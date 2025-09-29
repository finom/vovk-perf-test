import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cops")
export default class CopController {
  @operation({
    summary: "Get Cops",
  })
  @get()
  static getCops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cop",
  })
  @post("{id}")
  static createCop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
