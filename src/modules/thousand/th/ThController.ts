import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ths")
export default class ThController {
  @operation({
    summary: "Get Ths",
  })
  @get()
  static getThs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Th",
  })
  @post("{id}")
  static createTh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
