import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggls")
export default class GglController {
  @operation({
    summary: "Get Ggls",
  })
  @get()
  static getGgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggl",
  })
  @post("{id}")
  static createGgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
