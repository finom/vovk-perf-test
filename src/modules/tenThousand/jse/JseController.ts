import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jses")
export default class JseController {
  @operation({
    summary: "Get Jses",
  })
  @get()
  static getJses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jse",
  })
  @post("{id}")
  static createJse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
