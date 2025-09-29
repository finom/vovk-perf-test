import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzes")
export default class HzeController {
  @operation({
    summary: "Get Hzes",
  })
  @get()
  static getHzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hze",
  })
  @post("{id}")
  static createHze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
