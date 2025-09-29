import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awns")
export default class AwnController {
  @operation({
    summary: "Get Awns",
  })
  @get()
  static getAwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awn",
  })
  @post("{id}")
  static createAwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
