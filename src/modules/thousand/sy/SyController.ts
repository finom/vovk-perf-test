import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sies")
export default class SyController {
  @operation({
    summary: "Get Sies",
  })
  @get()
  static getSies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sy",
  })
  @post("{id}")
  static createSy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
