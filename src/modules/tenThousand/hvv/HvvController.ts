import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvvs")
export default class HvvController {
  @operation({
    summary: "Get Hvvs",
  })
  @get()
  static getHvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvv",
  })
  @post("{id}")
  static createHvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
