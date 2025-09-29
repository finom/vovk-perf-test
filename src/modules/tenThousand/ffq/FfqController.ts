import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffqs")
export default class FfqController {
  @operation({
    summary: "Get Ffqs",
  })
  @get()
  static getFfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffq",
  })
  @post("{id}")
  static createFfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
