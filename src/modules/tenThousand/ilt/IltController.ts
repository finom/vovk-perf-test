import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilt")
export default class IltController {
  @operation({
    summary: "Get Ilt",
  })
  @get()
  static getIlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilt",
  })
  @post("{id}")
  static createIlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
