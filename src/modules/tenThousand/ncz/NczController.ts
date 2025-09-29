import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nczs")
export default class NczController {
  @operation({
    summary: "Get Nczs",
  })
  @get()
  static getNczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncz",
  })
  @post("{id}")
  static createNcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
