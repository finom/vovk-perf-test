import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izies")
export default class IzyController {
  @operation({
    summary: "Get Izies",
  })
  @get()
  static getIzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izy",
  })
  @post("{id}")
  static createIzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
