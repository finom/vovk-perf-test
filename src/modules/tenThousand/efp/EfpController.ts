import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efps")
export default class EfpController {
  @operation({
    summary: "Get Efps",
  })
  @get()
  static getEfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efp",
  })
  @post("{id}")
  static createEfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
