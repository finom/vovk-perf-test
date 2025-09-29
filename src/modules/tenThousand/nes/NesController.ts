import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nes")
export default class NesController {
  @operation({
    summary: "Get Nes",
  })
  @get()
  static getNes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nes",
  })
  @post("{id}")
  static createNes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
