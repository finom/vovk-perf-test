import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvns")
export default class HvnController {
  @operation({
    summary: "Get Hvns",
  })
  @get()
  static getHvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvn",
  })
  @post("{id}")
  static createHvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
