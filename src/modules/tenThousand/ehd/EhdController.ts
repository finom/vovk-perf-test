import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehds")
export default class EhdController {
  @operation({
    summary: "Get Ehds",
  })
  @get()
  static getEhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehd",
  })
  @post("{id}")
  static createEhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
