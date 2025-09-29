import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dffs")
export default class DffController {
  @operation({
    summary: "Get Dffs",
  })
  @get()
  static getDffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dff",
  })
  @post("{id}")
  static createDff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
