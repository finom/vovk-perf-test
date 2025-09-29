import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efws")
export default class EfwController {
  @operation({
    summary: "Get Efws",
  })
  @get()
  static getEfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efw",
  })
  @post("{id}")
  static createEfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
