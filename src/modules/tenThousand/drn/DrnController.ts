import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drns")
export default class DrnController {
  @operation({
    summary: "Get Drns",
  })
  @get()
  static getDrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drn",
  })
  @post("{id}")
  static createDrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
