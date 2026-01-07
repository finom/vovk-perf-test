import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrs")
export default class JrsController {
  @operation({
    summary: "Get Jrs",
  })
  @get()
  static getJrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrs",
  })
  @post("{id}")
  static createJrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
