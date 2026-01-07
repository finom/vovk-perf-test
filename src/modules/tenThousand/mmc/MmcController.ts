import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmc")
export default class MmcController {
  @operation({
    summary: "Get Mmc",
  })
  @get()
  static getMmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmc",
  })
  @post("{id}")
  static createMmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
