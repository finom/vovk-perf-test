import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clb")
export default class ClbController {
  @operation({
    summary: "Get Clb",
  })
  @get()
  static getClb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clb",
  })
  @post("{id}")
  static createClb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
