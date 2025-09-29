import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iues")
export default class IueController {
  @operation({
    summary: "Get Iues",
  })
  @get()
  static getIues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iue",
  })
  @post("{id}")
  static createIue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
