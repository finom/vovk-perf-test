import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbq")
export default class FbqController {
  @operation({
    summary: "Get Fbq",
  })
  @get()
  static getFbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbq",
  })
  @post("{id}")
  static createFbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
