import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eams")
export default class EamController {
  @operation({
    summary: "Get Eams",
  })
  @get()
  static getEams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eam",
  })
  @post("{id}")
  static createEam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
