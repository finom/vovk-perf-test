import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fy")
export default class FyController {
  @operation({
    summary: "Get Fy",
  })
  @get()
  static getFy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fy",
  })
  @post("{id}")
  static createFy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
