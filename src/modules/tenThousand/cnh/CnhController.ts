import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnhs")
export default class CnhController {
  @operation({
    summary: "Get Cnhs",
  })
  @get()
  static getCnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnh",
  })
  @post("{id}")
  static createCnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
