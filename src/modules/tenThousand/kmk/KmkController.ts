import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmks")
export default class KmkController {
  @operation({
    summary: "Get Kmks",
  })
  @get()
  static getKmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmk",
  })
  @post("{id}")
  static createKmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
