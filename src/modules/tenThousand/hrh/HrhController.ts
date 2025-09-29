import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrhs")
export default class HrhController {
  @operation({
    summary: "Get Hrhs",
  })
  @get()
  static getHrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrh",
  })
  @post("{id}")
  static createHrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
