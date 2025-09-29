import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nols")
export default class NolController {
  @operation({
    summary: "Get Nols",
  })
  @get()
  static getNols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nol",
  })
  @post("{id}")
  static createNol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
