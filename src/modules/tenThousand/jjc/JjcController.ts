import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjcs")
export default class JjcController {
  @operation({
    summary: "Get Jjcs",
  })
  @get()
  static getJjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjc",
  })
  @post("{id}")
  static createJjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
