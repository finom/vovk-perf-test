import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idhs")
export default class IdhController {
  @operation({
    summary: "Get Idhs",
  })
  @get()
  static getIdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idh",
  })
  @post("{id}")
  static createIdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
