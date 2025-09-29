import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnds")
export default class FndController {
  @operation({
    summary: "Get Fnds",
  })
  @get()
  static getFnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnd",
  })
  @post("{id}")
  static createFnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
