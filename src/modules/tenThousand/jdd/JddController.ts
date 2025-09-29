import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdds")
export default class JddController {
  @operation({
    summary: "Get Jdds",
  })
  @get()
  static getJdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdd",
  })
  @post("{id}")
  static createJdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
