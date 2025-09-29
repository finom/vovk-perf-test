import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("engs")
export default class EngController {
  @operation({
    summary: "Get Engs",
  })
  @get()
  static getEngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eng",
  })
  @post("{id}")
  static createEng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
