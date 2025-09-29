import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijus")
export default class IjuController {
  @operation({
    summary: "Get Ijus",
  })
  @get()
  static getIjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iju",
  })
  @post("{id}")
  static createIju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
