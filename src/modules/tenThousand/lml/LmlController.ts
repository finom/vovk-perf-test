import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lml")
export default class LmlController {
  @operation({
    summary: "Get Lml",
  })
  @get()
  static getLml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lml",
  })
  @post("{id}")
  static createLml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
