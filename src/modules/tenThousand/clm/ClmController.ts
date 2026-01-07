import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clm")
export default class ClmController {
  @operation({
    summary: "Get Clm",
  })
  @get()
  static getClm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clm",
  })
  @post("{id}")
  static createClm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
