import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amy")
export default class AmyController {
  @operation({
    summary: "Get Amy",
  })
  @get()
  static getAmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amy",
  })
  @post("{id}")
  static createAmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
