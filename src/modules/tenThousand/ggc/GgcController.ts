import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggcs")
export default class GgcController {
  @operation({
    summary: "Get Ggcs",
  })
  @get()
  static getGgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggc",
  })
  @post("{id}")
  static createGgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
