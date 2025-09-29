import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdks")
export default class JdkController {
  @operation({
    summary: "Get Jdks",
  })
  @get()
  static getJdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdk",
  })
  @post("{id}")
  static createJdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
