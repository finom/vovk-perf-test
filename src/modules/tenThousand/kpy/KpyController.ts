import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpies")
export default class KpyController {
  @operation({
    summary: "Get Kpies",
  })
  @get()
  static getKpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpy",
  })
  @post("{id}")
  static createKpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
