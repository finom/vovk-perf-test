import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apj")
export default class ApjController {
  @operation({
    summary: "Get Apj",
  })
  @get()
  static getApj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apj",
  })
  @post("{id}")
  static createApj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
