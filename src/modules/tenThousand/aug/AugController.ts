import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("augs")
export default class AugController {
  @operation({
    summary: "Get Augs",
  })
  @get()
  static getAugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aug",
  })
  @post("{id}")
  static createAug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
