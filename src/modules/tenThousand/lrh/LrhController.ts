import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrhs")
export default class LrhController {
  @operation({
    summary: "Get Lrhs",
  })
  @get()
  static getLrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrh",
  })
  @post("{id}")
  static createLrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
