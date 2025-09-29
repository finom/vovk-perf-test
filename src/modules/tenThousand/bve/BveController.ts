import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bves")
export default class BveController {
  @operation({
    summary: "Get Bves",
  })
  @get()
  static getBves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bve",
  })
  @post("{id}")
  static createBve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
