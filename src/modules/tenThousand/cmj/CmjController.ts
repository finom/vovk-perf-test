import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmj")
export default class CmjController {
  @operation({
    summary: "Get Cmj",
  })
  @get()
  static getCmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmj",
  })
  @post("{id}")
  static createCmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
