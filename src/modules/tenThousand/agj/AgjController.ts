import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agjs")
export default class AgjController {
  @operation({
    summary: "Get Agjs",
  })
  @get()
  static getAgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agj",
  })
  @post("{id}")
  static createAgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
