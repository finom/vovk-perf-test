import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brm")
export default class BrmController {
  @operation({
    summary: "Get Brm",
  })
  @get()
  static getBrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brm",
  })
  @post("{id}")
  static createBrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
