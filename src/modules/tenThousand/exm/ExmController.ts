import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exms")
export default class ExmController {
  @operation({
    summary: "Get Exms",
  })
  @get()
  static getExms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exm",
  })
  @post("{id}")
  static createExm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
