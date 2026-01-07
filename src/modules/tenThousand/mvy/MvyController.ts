import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvy")
export default class MvyController {
  @operation({
    summary: "Get Mvy",
  })
  @get()
  static getMvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvy",
  })
  @post("{id}")
  static createMvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
