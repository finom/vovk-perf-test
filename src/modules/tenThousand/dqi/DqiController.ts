import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqis")
export default class DqiController {
  @operation({
    summary: "Get Dqis",
  })
  @get()
  static getDqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqi",
  })
  @post("{id}")
  static createDqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
