import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hols")
export default class HolController {
  @operation({
    summary: "Get Hols",
  })
  @get()
  static getHols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hol",
  })
  @post("{id}")
  static createHol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
