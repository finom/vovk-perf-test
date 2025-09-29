import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnks")
export default class DnkController {
  @operation({
    summary: "Get Dnks",
  })
  @get()
  static getDnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnk",
  })
  @post("{id}")
  static createDnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
