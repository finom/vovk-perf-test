import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aais")
export default class AaiController {
  @operation({
    summary: "Get Aais",
  })
  @get()
  static getAais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aai",
  })
  @post("{id}")
  static createAai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
