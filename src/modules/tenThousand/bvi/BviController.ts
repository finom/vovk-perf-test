import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvi")
export default class BviController {
  @operation({
    summary: "Get Bvi",
  })
  @get()
  static getBvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvi",
  })
  @post("{id}")
  static createBvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
