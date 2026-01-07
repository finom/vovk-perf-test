import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlz")
export default class NlzController {
  @operation({
    summary: "Get Nlz",
  })
  @get()
  static getNlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlz",
  })
  @post("{id}")
  static createNlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
