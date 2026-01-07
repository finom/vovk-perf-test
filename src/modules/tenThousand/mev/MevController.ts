import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mev")
export default class MevController {
  @operation({
    summary: "Get Mev",
  })
  @get()
  static getMev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mev",
  })
  @post("{id}")
  static createMev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
