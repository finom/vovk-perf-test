import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lip")
export default class LipController {
  @operation({
    summary: "Get Lip",
  })
  @get()
  static getLip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lip",
  })
  @post("{id}")
  static createLip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
