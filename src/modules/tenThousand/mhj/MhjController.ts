import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhjs")
export default class MhjController {
  @operation({
    summary: "Get Mhjs",
  })
  @get()
  static getMhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhj",
  })
  @post("{id}")
  static createMhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
