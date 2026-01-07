import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkf")
export default class LkfController {
  @operation({
    summary: "Get Lkf",
  })
  @get()
  static getLkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkf",
  })
  @post("{id}")
  static createLkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
