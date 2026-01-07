import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baq")
export default class BaqController {
  @operation({
    summary: "Get Baq",
  })
  @get()
  static getBaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baq",
  })
  @post("{id}")
  static createBaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
