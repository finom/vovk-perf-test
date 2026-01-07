import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhy")
export default class MhyController {
  @operation({
    summary: "Get Mhy",
  })
  @get()
  static getMhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhy",
  })
  @post("{id}")
  static createMhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
