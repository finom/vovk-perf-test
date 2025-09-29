import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqds")
export default class DqdController {
  @operation({
    summary: "Get Dqds",
  })
  @get()
  static getDqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqd",
  })
  @post("{id}")
  static createDqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
