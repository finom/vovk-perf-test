import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddus")
export default class DduController {
  @operation({
    summary: "Get Ddus",
  })
  @get()
  static getDdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddu",
  })
  @post("{id}")
  static createDdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
