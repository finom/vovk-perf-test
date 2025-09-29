import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coes")
export default class CoeController {
  @operation({
    summary: "Get Coes",
  })
  @get()
  static getCoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coe",
  })
  @post("{id}")
  static createCoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
