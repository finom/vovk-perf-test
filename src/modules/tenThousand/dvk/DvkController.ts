import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvks")
export default class DvkController {
  @operation({
    summary: "Get Dvks",
  })
  @get()
  static getDvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvk",
  })
  @post("{id}")
  static createDvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
