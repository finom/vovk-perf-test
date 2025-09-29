import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfcs")
export default class KfcController {
  @operation({
    summary: "Get Kfcs",
  })
  @get()
  static getKfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfc",
  })
  @post("{id}")
  static createKfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
