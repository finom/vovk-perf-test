import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enns")
export default class EnnController {
  @operation({
    summary: "Get Enns",
  })
  @get()
  static getEnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enn",
  })
  @post("{id}")
  static createEnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
