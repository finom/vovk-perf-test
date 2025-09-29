import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuys")
export default class KuyController {
  @operation({
    summary: "Get Kuys",
  })
  @get()
  static getKuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuy",
  })
  @post("{id}")
  static createKuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
