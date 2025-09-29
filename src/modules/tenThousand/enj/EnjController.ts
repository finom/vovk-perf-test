import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enjs")
export default class EnjController {
  @operation({
    summary: "Get Enjs",
  })
  @get()
  static getEnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enj",
  })
  @post("{id}")
  static createEnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
