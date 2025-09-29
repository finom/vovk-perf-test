import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggfs")
export default class GgfController {
  @operation({
    summary: "Get Ggfs",
  })
  @get()
  static getGgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggf",
  })
  @post("{id}")
  static createGgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
