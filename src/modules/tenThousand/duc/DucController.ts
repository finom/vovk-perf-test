import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ducs")
export default class DucController {
  @operation({
    summary: "Get Ducs",
  })
  @get()
  static getDucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duc",
  })
  @post("{id}")
  static createDuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
