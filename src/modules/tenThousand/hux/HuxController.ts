import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hux")
export default class HuxController {
  @operation({
    summary: "Get Hux",
  })
  @get()
  static getHux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hux",
  })
  @post("{id}")
  static createHux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
