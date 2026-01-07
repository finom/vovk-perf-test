import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmk")
export default class CmkController {
  @operation({
    summary: "Get Cmk",
  })
  @get()
  static getCmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmk",
  })
  @post("{id}")
  static createCmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
