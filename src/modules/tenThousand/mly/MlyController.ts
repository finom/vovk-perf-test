import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mly")
export default class MlyController {
  @operation({
    summary: "Get Mly",
  })
  @get()
  static getMly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mly",
  })
  @post("{id}")
  static createMly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
