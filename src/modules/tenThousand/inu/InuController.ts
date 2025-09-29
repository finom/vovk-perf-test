import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inus")
export default class InuController {
  @operation({
    summary: "Get Inus",
  })
  @get()
  static getInus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inu",
  })
  @post("{id}")
  static createInu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
