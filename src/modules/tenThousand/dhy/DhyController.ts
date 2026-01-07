import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhy")
export default class DhyController {
  @operation({
    summary: "Get Dhy",
  })
  @get()
  static getDhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhy",
  })
  @post("{id}")
  static createDhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
