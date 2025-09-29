import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("s")
export default class SController {
  @operation({
    summary: "Get S",
  })
  @get()
  static getS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create S",
  })
  @post("{id}")
  static createS = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
