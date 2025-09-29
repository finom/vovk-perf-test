import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvqs")
export default class DvqController {
  @operation({
    summary: "Get Dvqs",
  })
  @get()
  static getDvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvq",
  })
  @post("{id}")
  static createDvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
