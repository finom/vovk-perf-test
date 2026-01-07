import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hy")
export default class HyController {
  @operation({
    summary: "Get Hy",
  })
  @get()
  static getHy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hy",
  })
  @post("{id}")
  static createHy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
