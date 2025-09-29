import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqzs")
export default class DqzController {
  @operation({
    summary: "Get Dqzs",
  })
  @get()
  static getDqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqz",
  })
  @post("{id}")
  static createDqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
