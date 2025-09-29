import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvrs")
export default class DvrController {
  @operation({
    summary: "Get Dvrs",
  })
  @get()
  static getDvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvr",
  })
  @post("{id}")
  static createDvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
