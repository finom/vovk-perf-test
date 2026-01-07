import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkr")
export default class DkrController {
  @operation({
    summary: "Get Dkr",
  })
  @get()
  static getDkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkr",
  })
  @post("{id}")
  static createDkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
