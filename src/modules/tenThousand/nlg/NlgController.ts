import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlg")
export default class NlgController {
  @operation({
    summary: "Get Nlg",
  })
  @get()
  static getNlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlg",
  })
  @post("{id}")
  static createNlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
