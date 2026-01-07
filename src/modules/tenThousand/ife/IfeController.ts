import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ife")
export default class IfeController {
  @operation({
    summary: "Get Ife",
  })
  @get()
  static getIfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ife",
  })
  @post("{id}")
  static createIfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
