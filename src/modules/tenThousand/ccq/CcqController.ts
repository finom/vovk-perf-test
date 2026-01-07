import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccq")
export default class CcqController {
  @operation({
    summary: "Get Ccq",
  })
  @get()
  static getCcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccq",
  })
  @post("{id}")
  static createCcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
