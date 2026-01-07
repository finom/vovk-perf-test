import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxx")
export default class HxxController {
  @operation({
    summary: "Get Hxx",
  })
  @get()
  static getHxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxx",
  })
  @post("{id}")
  static createHxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
