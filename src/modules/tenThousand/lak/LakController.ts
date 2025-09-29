import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laks")
export default class LakController {
  @operation({
    summary: "Get Laks",
  })
  @get()
  static getLaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lak",
  })
  @post("{id}")
  static createLak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
