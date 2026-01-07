import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsx")
export default class NsxController {
  @operation({
    summary: "Get Nsx",
  })
  @get()
  static getNsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsx",
  })
  @post("{id}")
  static createNsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
