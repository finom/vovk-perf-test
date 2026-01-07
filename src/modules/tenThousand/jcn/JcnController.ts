import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcn")
export default class JcnController {
  @operation({
    summary: "Get Jcn",
  })
  @get()
  static getJcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcn",
  })
  @post("{id}")
  static createJcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
