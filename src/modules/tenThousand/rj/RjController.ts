import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rjs")
export default class RjController {
  @operation({
    summary: "Get Rjs",
  })
  @get()
  static getRjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rj",
  })
  @post("{id}")
  static createRj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
