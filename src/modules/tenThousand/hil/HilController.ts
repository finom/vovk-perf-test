import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hils")
export default class HilController {
  @operation({
    summary: "Get Hils",
  })
  @get()
  static getHils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hil",
  })
  @post("{id}")
  static createHil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
