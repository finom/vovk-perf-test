import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inms")
export default class InmController {
  @operation({
    summary: "Get Inms",
  })
  @get()
  static getInms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inm",
  })
  @post("{id}")
  static createInm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
