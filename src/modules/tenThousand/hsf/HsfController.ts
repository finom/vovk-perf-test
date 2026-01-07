import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsf")
export default class HsfController {
  @operation({
    summary: "Get Hsf",
  })
  @get()
  static getHsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsf",
  })
  @post("{id}")
  static createHsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
