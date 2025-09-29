import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nches")
export default class NchController {
  @operation({
    summary: "Get Nches",
  })
  @get()
  static getNches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nch",
  })
  @post("{id}")
  static createNch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
