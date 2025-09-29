import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efjs")
export default class EfjController {
  @operation({
    summary: "Get Efjs",
  })
  @get()
  static getEfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efj",
  })
  @post("{id}")
  static createEfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
