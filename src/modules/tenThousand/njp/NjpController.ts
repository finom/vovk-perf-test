import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njp")
export default class NjpController {
  @operation({
    summary: "Get Njp",
  })
  @get()
  static getNjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njp",
  })
  @post("{id}")
  static createNjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
