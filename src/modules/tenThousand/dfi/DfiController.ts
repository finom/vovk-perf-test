import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfis")
export default class DfiController {
  @operation({
    summary: "Get Dfis",
  })
  @get()
  static getDfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfi",
  })
  @post("{id}")
  static createDfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
