import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duses")
export default class DusController {
  @operation({
    summary: "Get Duses",
  })
  @get()
  static getDuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dus",
  })
  @post("{id}")
  static createDus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
