import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoves")
export default class EofController {
  @operation({
    summary: "Get Eoves",
  })
  @get()
  static getEoves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eof",
  })
  @post("{id}")
  static createEof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
