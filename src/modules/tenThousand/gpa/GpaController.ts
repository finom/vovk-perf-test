import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpas")
export default class GpaController {
  @operation({
    summary: "Get Gpas",
  })
  @get()
  static getGpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpa",
  })
  @post("{id}")
  static createGpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
