import { procedure, prefix, get, post, operation } from "vovk";

@prefix("envs")
export default class EnvController {
  @operation({
    summary: "Get Envs",
  })
  @get()
  static getEnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Env",
  })
  @post("{id}")
  static createEnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
