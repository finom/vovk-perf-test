import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cux")
export default class CuxController {
  @operation({
    summary: "Get Cux",
  })
  @get()
  static getCux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cux",
  })
  @post("{id}")
  static createCux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
