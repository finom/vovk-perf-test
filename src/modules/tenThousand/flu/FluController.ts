import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flus")
export default class FluController {
  @operation({
    summary: "Get Flus",
  })
  @get()
  static getFlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flu",
  })
  @post("{id}")
  static createFlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
