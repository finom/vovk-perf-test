import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccl")
export default class CclController {
  @operation({
    summary: "Get Ccl",
  })
  @get()
  static getCcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccl",
  })
  @post("{id}")
  static createCcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
