import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcks")
export default class FckController {
  @operation({
    summary: "Get Fcks",
  })
  @get()
  static getFcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fck",
  })
  @post("{id}")
  static createFck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
