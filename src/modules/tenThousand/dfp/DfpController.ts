import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfps")
export default class DfpController {
  @operation({
    summary: "Get Dfps",
  })
  @get()
  static getDfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfp",
  })
  @post("{id}")
  static createDfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
