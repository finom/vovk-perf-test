import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jggs")
export default class JggController {
  @operation({
    summary: "Get Jggs",
  })
  @get()
  static getJggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgg",
  })
  @post("{id}")
  static createJgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
