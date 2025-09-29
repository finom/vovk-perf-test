import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeps")
export default class AepController {
  @operation({
    summary: "Get Aeps",
  })
  @get()
  static getAeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aep",
  })
  @post("{id}")
  static createAep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
