import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzps")
export default class BzpController {
  @operation({
    summary: "Get Bzps",
  })
  @get()
  static getBzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzp",
  })
  @post("{id}")
  static createBzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
