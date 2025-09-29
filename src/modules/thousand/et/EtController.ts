import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ets")
export default class EtController {
  @operation({
    summary: "Get Ets",
  })
  @get()
  static getEts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Et",
  })
  @post("{id}")
  static createEt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
