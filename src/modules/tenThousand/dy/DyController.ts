import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dies")
export default class DyController {
  @operation({
    summary: "Get Dies",
  })
  @get()
  static getDies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dy",
  })
  @post("{id}")
  static createDy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
