import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fys")
export default class FysController {
  @operation({
    summary: "Get Fys",
  })
  @get()
  static getFys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fys",
  })
  @post("{id}")
  static createFys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
