import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbr")
export default class BbrController {
  @operation({
    summary: "Get Bbr",
  })
  @get()
  static getBbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbr",
  })
  @post("{id}")
  static createBbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
