import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejgs")
export default class EjgController {
  @operation({
    summary: "Get Ejgs",
  })
  @get()
  static getEjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejg",
  })
  @post("{id}")
  static createEjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
