import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frs")
export default class FrsController {
  @operation({
    summary: "Get Frs",
  })
  @get()
  static getFrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frs",
  })
  @post("{id}")
  static createFrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
