import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mufs")
export default class MufController {
  @operation({
    summary: "Get Mufs",
  })
  @get()
  static getMufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muf",
  })
  @post("{id}")
  static createMuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
