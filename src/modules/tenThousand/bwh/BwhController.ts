import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwhs")
export default class BwhController {
  @operation({
    summary: "Get Bwhs",
  })
  @get()
  static getBwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwh",
  })
  @post("{id}")
  static createBwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
