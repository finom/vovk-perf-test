import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clbs")
export default class ClbController {
  @operation({
    summary: "Get Clbs",
  })
  @get()
  static getClbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clb",
  })
  @post("{id}")
  static createClb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
