import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apv")
export default class ApvController {
  @operation({
    summary: "Get Apv",
  })
  @get()
  static getApv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apv",
  })
  @post("{id}")
  static createApv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
