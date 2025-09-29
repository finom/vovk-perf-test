import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqs")
export default class DqController {
  @operation({
    summary: "Get Dqs",
  })
  @get()
  static getDqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dq",
  })
  @post("{id}")
  static createDq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
