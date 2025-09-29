import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggds")
export default class GgdController {
  @operation({
    summary: "Get Ggds",
  })
  @get()
  static getGgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggd",
  })
  @post("{id}")
  static createGgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
