import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxx")
export default class JxxController {
  @operation({
    summary: "Get Jxx",
  })
  @get()
  static getJxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxx",
  })
  @post("{id}")
  static createJxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
