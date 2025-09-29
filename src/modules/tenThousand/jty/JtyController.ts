import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jties")
export default class JtyController {
  @operation({
    summary: "Get Jties",
  })
  @get()
  static getJties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jty",
  })
  @post("{id}")
  static createJty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
