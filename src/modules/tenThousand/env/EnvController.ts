import { procedure, prefix, get, post, operation } from "vovk";

@prefix("env")
export default class EnvController {
  @operation({
    summary: "Get Env",
  })
  @get()
  static getEnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Env",
  })
  @post("{id}")
  static createEnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
