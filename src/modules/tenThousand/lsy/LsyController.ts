import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsies")
export default class LsyController {
  @operation({
    summary: "Get Lsies",
  })
  @get()
  static getLsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsy",
  })
  @post("{id}")
  static createLsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
