import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arls")
export default class ArlController {
  @operation({
    summary: "Get Arls",
  })
  @get()
  static getArls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arl",
  })
  @post("{id}")
  static createArl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
