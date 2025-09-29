import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juts")
export default class JutController {
  @operation({
    summary: "Get Juts",
  })
  @get()
  static getJuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jut",
  })
  @post("{id}")
  static createJut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
