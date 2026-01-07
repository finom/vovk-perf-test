import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksz")
export default class KszController {
  @operation({
    summary: "Get Ksz",
  })
  @get()
  static getKsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksz",
  })
  @post("{id}")
  static createKsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
