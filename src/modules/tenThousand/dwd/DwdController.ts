import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwds")
export default class DwdController {
  @operation({
    summary: "Get Dwds",
  })
  @get()
  static getDwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwd",
  })
  @post("{id}")
  static createDwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
