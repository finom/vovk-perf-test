import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzn")
export default class JznController {
  @operation({
    summary: "Get Jzn",
  })
  @get()
  static getJzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzn",
  })
  @post("{id}")
  static createJzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
