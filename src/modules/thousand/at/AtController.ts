import { procedure, prefix, get, post, operation } from "vovk";

@prefix("at")
export default class AtController {
  @operation({
    summary: "Get At",
  })
  @get()
  static getAt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create At",
  })
  @post("{id}")
  static createAt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
