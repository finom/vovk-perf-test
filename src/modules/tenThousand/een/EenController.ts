import { procedure, prefix, get, post, operation } from "vovk";

@prefix("een")
export default class EenController {
  @operation({
    summary: "Get Een",
  })
  @get()
  static getEen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Een",
  })
  @post("{id}")
  static createEen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
