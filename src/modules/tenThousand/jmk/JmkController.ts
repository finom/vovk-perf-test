import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmks")
export default class JmkController {
  @operation({
    summary: "Get Jmks",
  })
  @get()
  static getJmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmk",
  })
  @post("{id}")
  static createJmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
