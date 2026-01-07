import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzg")
export default class JzgController {
  @operation({
    summary: "Get Jzg",
  })
  @get()
  static getJzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzg",
  })
  @post("{id}")
  static createJzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
