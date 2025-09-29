import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpcs")
export default class HpcController {
  @operation({
    summary: "Get Hpcs",
  })
  @get()
  static getHpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpc",
  })
  @post("{id}")
  static createHpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
