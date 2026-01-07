import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzj")
export default class JzjController {
  @operation({
    summary: "Get Jzj",
  })
  @get()
  static getJzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzj",
  })
  @post("{id}")
  static createJzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
