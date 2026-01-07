import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jda")
export default class JdaController {
  @operation({
    summary: "Get Jda",
  })
  @get()
  static getJda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jda",
  })
  @post("{id}")
  static createJda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
