import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctw")
export default class CtwController {
  @operation({
    summary: "Get Ctw",
  })
  @get()
  static getCtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctw",
  })
  @post("{id}")
  static createCtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
