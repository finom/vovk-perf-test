import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtn")
export default class MtnController {
  @operation({
    summary: "Get Mtn",
  })
  @get()
  static getMtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtn",
  })
  @post("{id}")
  static createMtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
