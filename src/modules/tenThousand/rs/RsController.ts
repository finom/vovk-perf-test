import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rs")
export default class RsController {
  @operation({
    summary: "Get Rs",
  })
  @get()
  static getRs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rs",
  })
  @post("{id}")
  static createRs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
