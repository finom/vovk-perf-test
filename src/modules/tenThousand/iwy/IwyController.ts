import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwies")
export default class IwyController {
  @operation({
    summary: "Get Iwies",
  })
  @get()
  static getIwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwy",
  })
  @post("{id}")
  static createIwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
