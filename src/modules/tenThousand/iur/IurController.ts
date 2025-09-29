import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iurs")
export default class IurController {
  @operation({
    summary: "Get Iurs",
  })
  @get()
  static getIurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iur",
  })
  @post("{id}")
  static createIur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
