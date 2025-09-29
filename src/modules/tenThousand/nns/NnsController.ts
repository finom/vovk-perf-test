import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nns")
export default class NnsController {
  @operation({
    summary: "Get Nns",
  })
  @get()
  static getNns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nns",
  })
  @post("{id}")
  static createNns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
