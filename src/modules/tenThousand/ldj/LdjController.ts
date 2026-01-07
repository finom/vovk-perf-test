import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldj")
export default class LdjController {
  @operation({
    summary: "Get Ldj",
  })
  @get()
  static getLdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldj",
  })
  @post("{id}")
  static createLdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
