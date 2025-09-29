import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcrs")
export default class FcrController {
  @operation({
    summary: "Get Fcrs",
  })
  @get()
  static getFcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcr",
  })
  @post("{id}")
  static createFcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
