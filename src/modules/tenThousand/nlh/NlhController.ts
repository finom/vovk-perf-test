import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlh")
export default class NlhController {
  @operation({
    summary: "Get Nlh",
  })
  @get()
  static getNlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlh",
  })
  @post("{id}")
  static createNlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
