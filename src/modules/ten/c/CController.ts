import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cs")
export default class CController {
  @operation({
    summary: "Get CS",
  })
  @get()
  static getCS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create C",
  })
  @post("{id}")
  static createC = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
