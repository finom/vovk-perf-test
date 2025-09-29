import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mms")
export default class MmsController {
  @operation({
    summary: "Get Mms",
  })
  @get()
  static getMms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mms",
  })
  @post("{id}")
  static createMms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
