import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mps")
export default class MpsController {
  @operation({
    summary: "Get Mps",
  })
  @get()
  static getMps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mps",
  })
  @post("{id}")
  static createMps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
