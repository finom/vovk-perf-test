import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fehs")
export default class FehController {
  @operation({
    summary: "Get Fehs",
  })
  @get()
  static getFehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Feh",
  })
  @post("{id}")
  static createFeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
