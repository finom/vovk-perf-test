import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nes")
export default class NeController {
  @operation({
    summary: "Get Nes",
  })
  @get()
  static getNes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ne",
  })
  @post("{id}")
  static createNe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
