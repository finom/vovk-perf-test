import { procedure, prefix, get, post, operation } from "vovk";

@prefix("l")
export default class LController {
  @operation({
    summary: "Get L",
  })
  @get()
  static getL = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create L",
  })
  @post("{id}")
  static createL = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
