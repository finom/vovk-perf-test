import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnqs")
export default class DnqController {
  @operation({
    summary: "Get Dnqs",
  })
  @get()
  static getDnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnq",
  })
  @post("{id}")
  static createDnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
