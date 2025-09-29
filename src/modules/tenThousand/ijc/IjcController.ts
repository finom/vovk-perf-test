import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijcs")
export default class IjcController {
  @operation({
    summary: "Get Ijcs",
  })
  @get()
  static getIjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijc",
  })
  @post("{id}")
  static createIjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
