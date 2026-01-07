import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brr")
export default class BrrController {
  @operation({
    summary: "Get Brr",
  })
  @get()
  static getBrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brr",
  })
  @post("{id}")
  static createBrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
