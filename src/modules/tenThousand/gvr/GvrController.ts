import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvrs")
export default class GvrController {
  @operation({
    summary: "Get Gvrs",
  })
  @get()
  static getGvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvr",
  })
  @post("{id}")
  static createGvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
