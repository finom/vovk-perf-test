import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mits")
export default class MitController {
  @operation({
    summary: "Get Mits",
  })
  @get()
  static getMits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mit",
  })
  @post("{id}")
  static createMit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
