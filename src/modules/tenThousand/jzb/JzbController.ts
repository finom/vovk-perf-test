import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzb")
export default class JzbController {
  @operation({
    summary: "Get Jzb",
  })
  @get()
  static getJzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzb",
  })
  @post("{id}")
  static createJzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
