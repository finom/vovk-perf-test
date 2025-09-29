import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hozs")
export default class HozController {
  @operation({
    summary: "Get Hozs",
  })
  @get()
  static getHozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoz",
  })
  @post("{id}")
  static createHoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
