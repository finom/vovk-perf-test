import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aigs")
export default class AigController {
  @operation({
    summary: "Get Aigs",
  })
  @get()
  static getAigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aig",
  })
  @post("{id}")
  static createAig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
