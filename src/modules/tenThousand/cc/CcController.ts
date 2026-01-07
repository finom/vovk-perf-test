import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cc")
export default class CcController {
  @operation({
    summary: "Get Cc",
  })
  @get()
  static getCc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cc",
  })
  @post("{id}")
  static createCc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
