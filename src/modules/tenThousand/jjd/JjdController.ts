import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjds")
export default class JjdController {
  @operation({
    summary: "Get Jjds",
  })
  @get()
  static getJjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjd",
  })
  @post("{id}")
  static createJjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
