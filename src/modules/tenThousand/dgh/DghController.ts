import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgh")
export default class DghController {
  @operation({
    summary: "Get Dgh",
  })
  @get()
  static getDgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgh",
  })
  @post("{id}")
  static createDgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
