import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccj")
export default class CcjController {
  @operation({
    summary: "Get Ccj",
  })
  @get()
  static getCcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccj",
  })
  @post("{id}")
  static createCcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
