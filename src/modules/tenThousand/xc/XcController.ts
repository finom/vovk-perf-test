import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xc")
export default class XcController {
  @operation({
    summary: "Get Xc",
  })
  @get()
  static getXc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xc",
  })
  @post("{id}")
  static createXc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
