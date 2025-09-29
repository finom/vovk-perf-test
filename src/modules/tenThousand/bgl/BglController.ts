import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgls")
export default class BglController {
  @operation({
    summary: "Get Bgls",
  })
  @get()
  static getBgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgl",
  })
  @post("{id}")
  static createBgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
