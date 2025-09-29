import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lds")
export default class LdsController {
  @operation({
    summary: "Get Lds",
  })
  @get()
  static getLds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lds",
  })
  @post("{id}")
  static createLds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
