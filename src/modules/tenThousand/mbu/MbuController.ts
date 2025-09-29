import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbus")
export default class MbuController {
  @operation({
    summary: "Get Mbus",
  })
  @get()
  static getMbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbu",
  })
  @post("{id}")
  static createMbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
