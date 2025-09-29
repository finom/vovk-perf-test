import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jths")
export default class JthController {
  @operation({
    summary: "Get Jths",
  })
  @get()
  static getJths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jth",
  })
  @post("{id}")
  static createJth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
