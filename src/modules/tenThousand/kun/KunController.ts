import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuns")
export default class KunController {
  @operation({
    summary: "Get Kuns",
  })
  @get()
  static getKuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kun",
  })
  @post("{id}")
  static createKun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
