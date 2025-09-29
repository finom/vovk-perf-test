import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkds")
export default class GkdController {
  @operation({
    summary: "Get Gkds",
  })
  @get()
  static getGkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkd",
  })
  @post("{id}")
  static createGkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
