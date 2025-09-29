import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aors")
export default class AorController {
  @operation({
    summary: "Get Aors",
  })
  @get()
  static getAors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aor",
  })
  @post("{id}")
  static createAor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
