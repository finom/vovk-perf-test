import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mars")
export default class MarController {
  @operation({
    summary: "Get Mars",
  })
  @get()
  static getMars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mar",
  })
  @post("{id}")
  static createMar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
