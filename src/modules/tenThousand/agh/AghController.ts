import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aghs")
export default class AghController {
  @operation({
    summary: "Get Aghs",
  })
  @get()
  static getAghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agh",
  })
  @post("{id}")
  static createAgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
