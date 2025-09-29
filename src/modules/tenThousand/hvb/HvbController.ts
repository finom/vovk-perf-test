import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvbs")
export default class HvbController {
  @operation({
    summary: "Get Hvbs",
  })
  @get()
  static getHvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvb",
  })
  @post("{id}")
  static createHvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
