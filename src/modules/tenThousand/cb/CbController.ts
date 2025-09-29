import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbs")
export default class CbController {
  @operation({
    summary: "Get Cbs",
  })
  @get()
  static getCbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cb",
  })
  @post("{id}")
  static createCb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
