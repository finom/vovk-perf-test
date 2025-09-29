import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amies")
export default class AmyController {
  @operation({
    summary: "Get Amies",
  })
  @get()
  static getAmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amy",
  })
  @post("{id}")
  static createAmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
