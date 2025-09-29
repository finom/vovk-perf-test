import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejcs")
export default class EjcController {
  @operation({
    summary: "Get Ejcs",
  })
  @get()
  static getEjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejc",
  })
  @post("{id}")
  static createEjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
