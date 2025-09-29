import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilves")
export default class IlfController {
  @operation({
    summary: "Get Ilves",
  })
  @get()
  static getIlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilf",
  })
  @post("{id}")
  static createIlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
