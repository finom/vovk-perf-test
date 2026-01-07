import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wf")
export default class WfController {
  @operation({
    summary: "Get Wf",
  })
  @get()
  static getWf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wf",
  })
  @post("{id}")
  static createWf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
