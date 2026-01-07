import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrm")
export default class MrmController {
  @operation({
    summary: "Get Mrm",
  })
  @get()
  static getMrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrm",
  })
  @post("{id}")
  static createMrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
