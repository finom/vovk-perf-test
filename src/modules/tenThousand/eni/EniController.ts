import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enis")
export default class EniController {
  @operation({
    summary: "Get Enis",
  })
  @get()
  static getEnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eni",
  })
  @post("{id}")
  static createEni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
