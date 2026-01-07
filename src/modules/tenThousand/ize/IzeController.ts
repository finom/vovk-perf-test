import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ize")
export default class IzeController {
  @operation({
    summary: "Get Ize",
  })
  @get()
  static getIze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ize",
  })
  @post("{id}")
  static createIze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
