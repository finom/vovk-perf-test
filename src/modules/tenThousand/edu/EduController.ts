import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edus")
export default class EduController {
  @operation({
    summary: "Get Edus",
  })
  @get()
  static getEdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edu",
  })
  @post("{id}")
  static createEdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
