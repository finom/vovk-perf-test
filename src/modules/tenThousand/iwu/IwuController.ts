import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwu")
export default class IwuController {
  @operation({
    summary: "Get Iwu",
  })
  @get()
  static getIwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwu",
  })
  @post("{id}")
  static createIwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
