import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jycs")
export default class JycController {
  @operation({
    summary: "Get Jycs",
  })
  @get()
  static getJycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyc",
  })
  @post("{id}")
  static createJyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
