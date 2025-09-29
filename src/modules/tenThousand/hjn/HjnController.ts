import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjns")
export default class HjnController {
  @operation({
    summary: "Get Hjns",
  })
  @get()
  static getHjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjn",
  })
  @post("{id}")
  static createHjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
