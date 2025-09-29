import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iins")
export default class IinController {
  @operation({
    summary: "Get Iins",
  })
  @get()
  static getIins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iin",
  })
  @post("{id}")
  static createIin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
