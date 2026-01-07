import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msm")
export default class MsmController {
  @operation({
    summary: "Get Msm",
  })
  @get()
  static getMsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msm",
  })
  @post("{id}")
  static createMsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
