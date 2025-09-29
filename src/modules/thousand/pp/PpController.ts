import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pps")
export default class PpController {
  @operation({
    summary: "Get Pps",
  })
  @get()
  static getPps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pp",
  })
  @post("{id}")
  static createPp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
