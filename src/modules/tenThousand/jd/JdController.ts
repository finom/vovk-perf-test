import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jds")
export default class JdController {
  @operation({
    summary: "Get Jds",
  })
  @get()
  static getJds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jd",
  })
  @post("{id}")
  static createJd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
