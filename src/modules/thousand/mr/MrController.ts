import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrs")
export default class MrController {
  @operation({
    summary: "Get Mrs",
  })
  @get()
  static getMrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mr",
  })
  @post("{id}")
  static createMr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
