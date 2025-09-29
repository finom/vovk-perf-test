import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvvs")
export default class DvvController {
  @operation({
    summary: "Get Dvvs",
  })
  @get()
  static getDvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvv",
  })
  @post("{id}")
  static createDvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
