import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euqs")
export default class EuqController {
  @operation({
    summary: "Get Euqs",
  })
  @get()
  static getEuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euq",
  })
  @post("{id}")
  static createEuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
