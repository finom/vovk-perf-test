import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gux")
export default class GuxController {
  @operation({
    summary: "Get Gux",
  })
  @get()
  static getGux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gux",
  })
  @post("{id}")
  static createGux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
