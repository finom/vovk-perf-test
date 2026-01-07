import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcr")
export default class JcrController {
  @operation({
    summary: "Get Jcr",
  })
  @get()
  static getJcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcr",
  })
  @post("{id}")
  static createJcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
