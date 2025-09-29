import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duns")
export default class DunController {
  @operation({
    summary: "Get Duns",
  })
  @get()
  static getDuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dun",
  })
  @post("{id}")
  static createDun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
