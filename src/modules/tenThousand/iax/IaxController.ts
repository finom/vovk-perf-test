import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaxes")
export default class IaxController {
  @operation({
    summary: "Get Iaxes",
  })
  @get()
  static getIaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iax",
  })
  @post("{id}")
  static createIax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
