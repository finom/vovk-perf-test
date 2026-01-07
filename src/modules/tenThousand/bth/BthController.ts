import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bth")
export default class BthController {
  @operation({
    summary: "Get Bth",
  })
  @get()
  static getBth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bth",
  })
  @post("{id}")
  static createBth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
