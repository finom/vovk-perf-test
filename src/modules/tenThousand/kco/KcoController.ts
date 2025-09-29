import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcos")
export default class KcoController {
  @operation({
    summary: "Get Kcos",
  })
  @get()
  static getKcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kco",
  })
  @post("{id}")
  static createKco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
