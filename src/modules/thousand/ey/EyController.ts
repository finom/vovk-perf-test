import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eys")
export default class EyController {
  @operation({
    summary: "Get Eys",
  })
  @get()
  static getEys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ey",
  })
  @post("{id}")
  static createEy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
