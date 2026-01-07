import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmc")
export default class LmcController {
  @operation({
    summary: "Get Lmc",
  })
  @get()
  static getLmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmc",
  })
  @post("{id}")
  static createLmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
