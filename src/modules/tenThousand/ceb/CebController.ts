import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceb")
export default class CebController {
  @operation({
    summary: "Get Ceb",
  })
  @get()
  static getCeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceb",
  })
  @post("{id}")
  static createCeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
