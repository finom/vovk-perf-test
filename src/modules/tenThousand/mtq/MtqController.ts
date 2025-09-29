import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtqs")
export default class MtqController {
  @operation({
    summary: "Get Mtqs",
  })
  @get()
  static getMtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtq",
  })
  @post("{id}")
  static createMtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
