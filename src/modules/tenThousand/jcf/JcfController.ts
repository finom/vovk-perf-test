import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcf")
export default class JcfController {
  @operation({
    summary: "Get Jcf",
  })
  @get()
  static getJcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcf",
  })
  @post("{id}")
  static createJcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
