import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxi")
export default class JxiController {
  @operation({
    summary: "Get Jxi",
  })
  @get()
  static getJxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxi",
  })
  @post("{id}")
  static createJxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
