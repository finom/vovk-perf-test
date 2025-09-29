import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhds")
export default class JhdController {
  @operation({
    summary: "Get Jhds",
  })
  @get()
  static getJhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhd",
  })
  @post("{id}")
  static createJhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
