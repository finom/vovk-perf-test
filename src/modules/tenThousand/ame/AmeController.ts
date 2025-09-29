import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ames")
export default class AmeController {
  @operation({
    summary: "Get Ames",
  })
  @get()
  static getAmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ame",
  })
  @post("{id}")
  static createAme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
