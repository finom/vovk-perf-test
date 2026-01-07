import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhf")
export default class LhfController {
  @operation({
    summary: "Get Lhf",
  })
  @get()
  static getLhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhf",
  })
  @post("{id}")
  static createLhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
