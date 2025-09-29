import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhds")
export default class HhdController {
  @operation({
    summary: "Get Hhds",
  })
  @get()
  static getHhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhd",
  })
  @post("{id}")
  static createHhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
