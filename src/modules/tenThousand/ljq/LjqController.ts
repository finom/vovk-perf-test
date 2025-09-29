import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljqs")
export default class LjqController {
  @operation({
    summary: "Get Ljqs",
  })
  @get()
  static getLjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljq",
  })
  @post("{id}")
  static createLjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
