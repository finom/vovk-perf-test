import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyi")
export default class JyiController {
  @operation({
    summary: "Get Jyi",
  })
  @get()
  static getJyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyi",
  })
  @post("{id}")
  static createJyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
