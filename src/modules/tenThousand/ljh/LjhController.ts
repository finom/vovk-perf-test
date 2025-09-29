import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljhs")
export default class LjhController {
  @operation({
    summary: "Get Ljhs",
  })
  @get()
  static getLjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljh",
  })
  @post("{id}")
  static createLjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
