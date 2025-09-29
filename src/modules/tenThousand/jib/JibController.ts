import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jibs")
export default class JibController {
  @operation({
    summary: "Get Jibs",
  })
  @get()
  static getJibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jib",
  })
  @post("{id}")
  static createJib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
