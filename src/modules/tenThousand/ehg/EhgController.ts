import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehgs")
export default class EhgController {
  @operation({
    summary: "Get Ehgs",
  })
  @get()
  static getEhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehg",
  })
  @post("{id}")
  static createEhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
