import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elrs")
export default class ElrController {
  @operation({
    summary: "Get Elrs",
  })
  @get()
  static getElrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elr",
  })
  @post("{id}")
  static createElr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
