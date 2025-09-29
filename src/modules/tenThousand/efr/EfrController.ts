import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efrs")
export default class EfrController {
  @operation({
    summary: "Get Efrs",
  })
  @get()
  static getEfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efr",
  })
  @post("{id}")
  static createEfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
