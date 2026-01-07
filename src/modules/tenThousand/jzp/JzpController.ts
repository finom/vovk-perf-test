import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzp")
export default class JzpController {
  @operation({
    summary: "Get Jzp",
  })
  @get()
  static getJzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzp",
  })
  @post("{id}")
  static createJzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
