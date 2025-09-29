import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mads")
export default class MadController {
  @operation({
    summary: "Get Mads",
  })
  @get()
  static getMads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mad",
  })
  @post("{id}")
  static createMad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
