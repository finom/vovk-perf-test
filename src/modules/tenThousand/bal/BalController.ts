import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bal")
export default class BalController {
  @operation({
    summary: "Get Bal",
  })
  @get()
  static getBal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bal",
  })
  @post("{id}")
  static createBal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
