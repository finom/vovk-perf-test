import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahls")
export default class AhlController {
  @operation({
    summary: "Get Ahls",
  })
  @get()
  static getAhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahl",
  })
  @post("{id}")
  static createAhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
