import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mues")
export default class MueController {
  @operation({
    summary: "Get Mues",
  })
  @get()
  static getMues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mue",
  })
  @post("{id}")
  static createMue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
