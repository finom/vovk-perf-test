import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egus")
export default class EguController {
  @operation({
    summary: "Get Egus",
  })
  @get()
  static getEgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egu",
  })
  @post("{id}")
  static createEgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
