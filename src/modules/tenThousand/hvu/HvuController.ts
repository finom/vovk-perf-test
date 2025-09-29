import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvus")
export default class HvuController {
  @operation({
    summary: "Get Hvus",
  })
  @get()
  static getHvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvu",
  })
  @post("{id}")
  static createHvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
