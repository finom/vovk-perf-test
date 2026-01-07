import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlu")
export default class DluController {
  @operation({
    summary: "Get Dlu",
  })
  @get()
  static getDlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlu",
  })
  @post("{id}")
  static createDlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
