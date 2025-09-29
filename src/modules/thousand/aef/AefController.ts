import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aefs")
export default class AefController {
  @operation({
    summary: "Get Aefs",
  })
  @get()
  static getAefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aef",
  })
  @post("{id}")
  static createAef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
