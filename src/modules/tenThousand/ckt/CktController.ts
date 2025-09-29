import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckts")
export default class CktController {
  @operation({
    summary: "Get Ckts",
  })
  @get()
  static getCkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckt",
  })
  @post("{id}")
  static createCkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
