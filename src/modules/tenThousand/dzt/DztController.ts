import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzts")
export default class DztController {
  @operation({
    summary: "Get Dzts",
  })
  @get()
  static getDzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzt",
  })
  @post("{id}")
  static createDzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
