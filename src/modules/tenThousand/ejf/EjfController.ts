import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejfs")
export default class EjfController {
  @operation({
    summary: "Get Ejfs",
  })
  @get()
  static getEjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejf",
  })
  @post("{id}")
  static createEjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
