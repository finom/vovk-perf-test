import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mex")
export default class MexController {
  @operation({
    summary: "Get Mex",
  })
  @get()
  static getMex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mex",
  })
  @post("{id}")
  static createMex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
