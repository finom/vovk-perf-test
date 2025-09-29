import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iums")
export default class IumController {
  @operation({
    summary: "Get Iums",
  })
  @get()
  static getIums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ium",
  })
  @post("{id}")
  static createIum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
