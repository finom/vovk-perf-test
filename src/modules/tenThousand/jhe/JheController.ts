import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhe")
export default class JheController {
  @operation({
    summary: "Get Jhe",
  })
  @get()
  static getJhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhe",
  })
  @post("{id}")
  static createJhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
