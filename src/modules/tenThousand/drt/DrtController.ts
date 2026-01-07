import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drt")
export default class DrtController {
  @operation({
    summary: "Get Drt",
  })
  @get()
  static getDrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drt",
  })
  @post("{id}")
  static createDrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
