import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkp")
export default class DkpController {
  @operation({
    summary: "Get Dkp",
  })
  @get()
  static getDkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkp",
  })
  @post("{id}")
  static createDkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
