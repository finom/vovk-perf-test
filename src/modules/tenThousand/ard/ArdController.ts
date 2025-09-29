import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ards")
export default class ArdController {
  @operation({
    summary: "Get Ards",
  })
  @get()
  static getArds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ard",
  })
  @post("{id}")
  static createArd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
