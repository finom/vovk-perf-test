import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iajs")
export default class IajController {
  @operation({
    summary: "Get Iajs",
  })
  @get()
  static getIajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iaj",
  })
  @post("{id}")
  static createIaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
