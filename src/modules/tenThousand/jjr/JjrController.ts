import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjrs")
export default class JjrController {
  @operation({
    summary: "Get Jjrs",
  })
  @get()
  static getJjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjr",
  })
  @post("{id}")
  static createJjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
