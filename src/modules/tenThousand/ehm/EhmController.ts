import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehms")
export default class EhmController {
  @operation({
    summary: "Get Ehms",
  })
  @get()
  static getEhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehm",
  })
  @post("{id}")
  static createEhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
