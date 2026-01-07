import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ep")
export default class EpController {
  @operation({
    summary: "Get Ep",
  })
  @get()
  static getEp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ep",
  })
  @post("{id}")
  static createEp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
