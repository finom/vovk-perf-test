import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feps")
export default class FepController {
  @operation({
    summary: "Get Feps",
  })
  @get()
  static getFeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fep",
  })
  @post("{id}")
  static createFep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
