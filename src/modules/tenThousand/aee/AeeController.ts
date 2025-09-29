import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aees")
export default class AeeController {
  @operation({
    summary: "Get Aees",
  })
  @get()
  static getAees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aee",
  })
  @post("{id}")
  static createAee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
