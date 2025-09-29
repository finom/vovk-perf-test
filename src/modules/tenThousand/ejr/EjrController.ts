import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejrs")
export default class EjrController {
  @operation({
    summary: "Get Ejrs",
  })
  @get()
  static getEjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejr",
  })
  @post("{id}")
  static createEjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
