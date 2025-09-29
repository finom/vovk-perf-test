import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beps")
export default class BepController {
  @operation({
    summary: "Get Beps",
  })
  @get()
  static getBeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bep",
  })
  @post("{id}")
  static createBep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
