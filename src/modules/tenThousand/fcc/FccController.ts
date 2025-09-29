import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fccs")
export default class FccController {
  @operation({
    summary: "Get Fccs",
  })
  @get()
  static getFccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcc",
  })
  @post("{id}")
  static createFcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
