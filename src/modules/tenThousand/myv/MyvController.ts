import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myv")
export default class MyvController {
  @operation({
    summary: "Get Myv",
  })
  @get()
  static getMyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myv",
  })
  @post("{id}")
  static createMyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
