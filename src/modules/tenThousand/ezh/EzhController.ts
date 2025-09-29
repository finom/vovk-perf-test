import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezhs")
export default class EzhController {
  @operation({
    summary: "Get Ezhs",
  })
  @get()
  static getEzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezh",
  })
  @post("{id}")
  static createEzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
