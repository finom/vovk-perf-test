import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzns")
export default class MznController {
  @operation({
    summary: "Get Mzns",
  })
  @get()
  static getMzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzn",
  })
  @post("{id}")
  static createMzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
