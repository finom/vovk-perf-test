import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mins")
export default class MinController {
  @operation({
    summary: "Get Mins",
  })
  @get()
  static getMins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Min",
  })
  @post("{id}")
  static createMin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
