import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkg")
export default class DkgController {
  @operation({
    summary: "Get Dkg",
  })
  @get()
  static getDkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkg",
  })
  @post("{id}")
  static createDkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
