import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sl")
export default class SlController {
  @operation({
    summary: "Get Sl",
  })
  @get()
  static getSl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sl",
  })
  @post("{id}")
  static createSl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
