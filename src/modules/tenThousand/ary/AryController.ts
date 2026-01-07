import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ary")
export default class AryController {
  @operation({
    summary: "Get Ary",
  })
  @get()
  static getAry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ary",
  })
  @post("{id}")
  static createAry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
