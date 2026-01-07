import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhy")
export default class HhyController {
  @operation({
    summary: "Get Hhy",
  })
  @get()
  static getHhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhy",
  })
  @post("{id}")
  static createHhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
