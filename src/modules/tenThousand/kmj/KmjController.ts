import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmjs")
export default class KmjController {
  @operation({
    summary: "Get Kmjs",
  })
  @get()
  static getKmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmj",
  })
  @post("{id}")
  static createKmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
