import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("envs")
export default class EnvController {
  @operation({
    summary: "Get Envs",
  })
  @get()
  static getEnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Env",
  })
  @post("{id}")
  static createEnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
