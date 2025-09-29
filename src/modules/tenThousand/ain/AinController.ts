import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ains")
export default class AinController {
  @operation({
    summary: "Get Ains",
  })
  @get()
  static getAins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ain",
  })
  @post("{id}")
  static createAin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
