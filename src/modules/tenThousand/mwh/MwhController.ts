import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwhs")
export default class MwhController {
  @operation({
    summary: "Get Mwhs",
  })
  @get()
  static getMwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwh",
  })
  @post("{id}")
  static createMwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
