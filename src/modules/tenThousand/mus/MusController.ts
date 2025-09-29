import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muses")
export default class MusController {
  @operation({
    summary: "Get Muses",
  })
  @get()
  static getMuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mus",
  })
  @post("{id}")
  static createMus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
