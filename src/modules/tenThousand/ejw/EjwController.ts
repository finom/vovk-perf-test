import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejws")
export default class EjwController {
  @operation({
    summary: "Get Ejws",
  })
  @get()
  static getEjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejw",
  })
  @post("{id}")
  static createEjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
