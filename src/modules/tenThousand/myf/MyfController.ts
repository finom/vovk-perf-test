import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myf")
export default class MyfController {
  @operation({
    summary: "Get Myf",
  })
  @get()
  static getMyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myf",
  })
  @post("{id}")
  static createMyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
