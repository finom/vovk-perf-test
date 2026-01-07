import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwr")
export default class JwrController {
  @operation({
    summary: "Get Jwr",
  })
  @get()
  static getJwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwr",
  })
  @post("{id}")
  static createJwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
