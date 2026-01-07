import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gix")
export default class GixController {
  @operation({
    summary: "Get Gix",
  })
  @get()
  static getGix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gix",
  })
  @post("{id}")
  static createGix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
