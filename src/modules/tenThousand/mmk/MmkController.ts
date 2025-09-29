import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmks")
export default class MmkController {
  @operation({
    summary: "Get Mmks",
  })
  @get()
  static getMmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmk",
  })
  @post("{id}")
  static createMmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
