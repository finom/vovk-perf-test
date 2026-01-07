import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiy")
export default class JiyController {
  @operation({
    summary: "Get Jiy",
  })
  @get()
  static getJiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiy",
  })
  @post("{id}")
  static createJiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
