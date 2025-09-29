import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzns")
export default class BznController {
  @operation({
    summary: "Get Bzns",
  })
  @get()
  static getBzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzn",
  })
  @post("{id}")
  static createBzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
