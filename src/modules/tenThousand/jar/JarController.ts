import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jars")
export default class JarController {
  @operation({
    summary: "Get Jars",
  })
  @get()
  static getJars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jar",
  })
  @post("{id}")
  static createJar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
