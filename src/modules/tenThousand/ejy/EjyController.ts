import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejies")
export default class EjyController {
  @operation({
    summary: "Get Ejies",
  })
  @get()
  static getEjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejy",
  })
  @post("{id}")
  static createEjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
