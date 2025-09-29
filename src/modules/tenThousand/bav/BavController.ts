import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bavs")
export default class BavController {
  @operation({
    summary: "Get Bavs",
  })
  @get()
  static getBavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bav",
  })
  @post("{id}")
  static createBav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
