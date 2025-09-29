import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsns")
export default class HsnController {
  @operation({
    summary: "Get Hsns",
  })
  @get()
  static getHsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsn",
  })
  @post("{id}")
  static createHsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
