import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezzes")
export default class EzzController {
  @operation({
    summary: "Get Ezzes",
  })
  @get()
  static getEzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezz",
  })
  @post("{id}")
  static createEzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
