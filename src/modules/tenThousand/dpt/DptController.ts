import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpt")
export default class DptController {
  @operation({
    summary: "Get Dpt",
  })
  @get()
  static getDpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpt",
  })
  @post("{id}")
  static createDpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
