import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dels")
export default class DelController {
  @operation({
    summary: "Get Dels",
  })
  @get()
  static getDels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Del",
  })
  @post("{id}")
  static createDel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
