import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bf")
export default class BfController {
  @operation({
    summary: "Get Bf",
  })
  @get()
  static getBf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bf",
  })
  @post("{id}")
  static createBf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
