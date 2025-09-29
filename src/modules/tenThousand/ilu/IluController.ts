import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilus")
export default class IluController {
  @operation({
    summary: "Get Ilus",
  })
  @get()
  static getIlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilu",
  })
  @post("{id}")
  static createIlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
