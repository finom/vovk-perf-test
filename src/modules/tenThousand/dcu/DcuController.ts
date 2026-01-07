import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcu")
export default class DcuController {
  @operation({
    summary: "Get Dcu",
  })
  @get()
  static getDcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcu",
  })
  @post("{id}")
  static createDcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
