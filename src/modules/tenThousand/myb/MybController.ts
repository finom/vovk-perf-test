import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myb")
export default class MybController {
  @operation({
    summary: "Get Myb",
  })
  @get()
  static getMyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myb",
  })
  @post("{id}")
  static createMyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
