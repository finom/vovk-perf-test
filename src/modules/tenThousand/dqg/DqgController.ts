import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqgs")
export default class DqgController {
  @operation({
    summary: "Get Dqgs",
  })
  @get()
  static getDqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqg",
  })
  @post("{id}")
  static createDqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
