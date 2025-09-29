import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqies")
export default class DqyController {
  @operation({
    summary: "Get Dqies",
  })
  @get()
  static getDqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqy",
  })
  @post("{id}")
  static createDqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
