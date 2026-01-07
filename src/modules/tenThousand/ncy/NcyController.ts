import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncy")
export default class NcyController {
  @operation({
    summary: "Get Ncy",
  })
  @get()
  static getNcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncy",
  })
  @post("{id}")
  static createNcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
