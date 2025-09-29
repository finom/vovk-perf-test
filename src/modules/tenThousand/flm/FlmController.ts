import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flms")
export default class FlmController {
  @operation({
    summary: "Get Flms",
  })
  @get()
  static getFlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flm",
  })
  @post("{id}")
  static createFlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
