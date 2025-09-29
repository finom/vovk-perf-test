import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bups")
export default class BupController {
  @operation({
    summary: "Get Bups",
  })
  @get()
  static getBups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bup",
  })
  @post("{id}")
  static createBup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
