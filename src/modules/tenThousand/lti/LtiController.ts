import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lti")
export default class LtiController {
  @operation({
    summary: "Get Lti",
  })
  @get()
  static getLti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lti",
  })
  @post("{id}")
  static createLti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
