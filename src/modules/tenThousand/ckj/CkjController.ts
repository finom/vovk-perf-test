import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckjs")
export default class CkjController {
  @operation({
    summary: "Get Ckjs",
  })
  @get()
  static getCkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckj",
  })
  @post("{id}")
  static createCkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
