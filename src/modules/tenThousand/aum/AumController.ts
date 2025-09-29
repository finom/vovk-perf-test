import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aums")
export default class AumController {
  @operation({
    summary: "Get Aums",
  })
  @get()
  static getAums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aum",
  })
  @post("{id}")
  static createAum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
