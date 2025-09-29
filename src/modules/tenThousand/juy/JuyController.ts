import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juys")
export default class JuyController {
  @operation({
    summary: "Get Juys",
  })
  @get()
  static getJuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juy",
  })
  @post("{id}")
  static createJuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
