import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daks")
export default class DakController {
  @operation({
    summary: "Get Daks",
  })
  @get()
  static getDaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dak",
  })
  @post("{id}")
  static createDak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
