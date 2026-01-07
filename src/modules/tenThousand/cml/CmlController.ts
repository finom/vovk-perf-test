import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cml")
export default class CmlController {
  @operation({
    summary: "Get Cml",
  })
  @get()
  static getCml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cml",
  })
  @post("{id}")
  static createCml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
