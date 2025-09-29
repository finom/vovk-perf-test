import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzes")
export default class BzeController {
  @operation({
    summary: "Get Bzes",
  })
  @get()
  static getBzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bze",
  })
  @post("{id}")
  static createBze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
