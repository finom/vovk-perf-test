import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byd")
export default class BydController {
  @operation({
    summary: "Get Byd",
  })
  @get()
  static getByd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byd",
  })
  @post("{id}")
  static createByd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
