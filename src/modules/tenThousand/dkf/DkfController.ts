import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkf")
export default class DkfController {
  @operation({
    summary: "Get Dkf",
  })
  @get()
  static getDkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkf",
  })
  @post("{id}")
  static createDkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
