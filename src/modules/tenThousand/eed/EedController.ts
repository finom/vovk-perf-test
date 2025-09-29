import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeds")
export default class EedController {
  @operation({
    summary: "Get Eeds",
  })
  @get()
  static getEeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eed",
  })
  @post("{id}")
  static createEed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
