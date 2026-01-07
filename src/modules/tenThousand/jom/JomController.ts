import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jom")
export default class JomController {
  @operation({
    summary: "Get Jom",
  })
  @get()
  static getJom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jom",
  })
  @post("{id}")
  static createJom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
