import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcds")
export default class FcdController {
  @operation({
    summary: "Get Fcds",
  })
  @get()
  static getFcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcd",
  })
  @post("{id}")
  static createFcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
