import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fee")
export default class FeeController {
  @operation({
    summary: "Get Fee",
  })
  @get()
  static getFee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fee",
  })
  @post("{id}")
  static createFee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
