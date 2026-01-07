import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apx")
export default class ApxController {
  @operation({
    summary: "Get Apx",
  })
  @get()
  static getApx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apx",
  })
  @post("{id}")
  static createApx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
