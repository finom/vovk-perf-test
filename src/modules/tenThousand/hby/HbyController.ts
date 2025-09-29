import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbies")
export default class HbyController {
  @operation({
    summary: "Get Hbies",
  })
  @get()
  static getHbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hby",
  })
  @post("{id}")
  static createHby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
