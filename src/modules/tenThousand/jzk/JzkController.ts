import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzk")
export default class JzkController {
  @operation({
    summary: "Get Jzk",
  })
  @get()
  static getJzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzk",
  })
  @post("{id}")
  static createJzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
