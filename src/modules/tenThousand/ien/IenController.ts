import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ien")
export default class IenController {
  @operation({
    summary: "Get Ien",
  })
  @get()
  static getIen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ien",
  })
  @post("{id}")
  static createIen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
