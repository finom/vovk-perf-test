import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elps")
export default class ElpController {
  @operation({
    summary: "Get Elps",
  })
  @get()
  static getElps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elp",
  })
  @post("{id}")
  static createElp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
