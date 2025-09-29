import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efqs")
export default class EfqController {
  @operation({
    summary: "Get Efqs",
  })
  @get()
  static getEfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efq",
  })
  @post("{id}")
  static createEfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
