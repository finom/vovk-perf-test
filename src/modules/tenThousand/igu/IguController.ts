import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igus")
export default class IguController {
  @operation({
    summary: "Get Igus",
  })
  @get()
  static getIgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igu",
  })
  @post("{id}")
  static createIgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
