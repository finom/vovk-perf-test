import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rt")
export default class RtController {
  @operation({
    summary: "Get Rt",
  })
  @get()
  static getRt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rt",
  })
  @post("{id}")
  static createRt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
