import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mves")
export default class MveController {
  @operation({
    summary: "Get Mves",
  })
  @get()
  static getMves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mve",
  })
  @post("{id}")
  static createMve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
