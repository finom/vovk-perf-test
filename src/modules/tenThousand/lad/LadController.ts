import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lads")
export default class LadController {
  @operation({
    summary: "Get Lads",
  })
  @get()
  static getLads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lad",
  })
  @post("{id}")
  static createLad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
