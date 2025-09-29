import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bljs")
export default class BljController {
  @operation({
    summary: "Get Bljs",
  })
  @get()
  static getBljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blj",
  })
  @post("{id}")
  static createBlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
