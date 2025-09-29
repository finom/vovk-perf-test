import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlos")
export default class DloController {
  @operation({
    summary: "Get Dlos",
  })
  @get()
  static getDlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlo",
  })
  @post("{id}")
  static createDlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
