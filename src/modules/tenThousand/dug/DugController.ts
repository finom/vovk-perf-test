import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dugs")
export default class DugController {
  @operation({
    summary: "Get Dugs",
  })
  @get()
  static getDugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dug",
  })
  @post("{id}")
  static createDug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
