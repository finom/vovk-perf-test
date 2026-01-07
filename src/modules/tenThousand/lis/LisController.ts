import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lis")
export default class LisController {
  @operation({
    summary: "Get Lis",
  })
  @get()
  static getLis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lis",
  })
  @post("{id}")
  static createLis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
