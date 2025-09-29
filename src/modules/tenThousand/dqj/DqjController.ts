import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqjs")
export default class DqjController {
  @operation({
    summary: "Get Dqjs",
  })
  @get()
  static getDqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqj",
  })
  @post("{id}")
  static createDqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
