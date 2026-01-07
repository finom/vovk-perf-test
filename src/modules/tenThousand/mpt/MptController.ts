import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpt")
export default class MptController {
  @operation({
    summary: "Get Mpt",
  })
  @get()
  static getMpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpt",
  })
  @post("{id}")
  static createMpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
