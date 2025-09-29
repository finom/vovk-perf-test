import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eycs")
export default class EycController {
  @operation({
    summary: "Get Eycs",
  })
  @get()
  static getEycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyc",
  })
  @post("{id}")
  static createEyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
