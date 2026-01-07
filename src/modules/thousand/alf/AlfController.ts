import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alf")
export default class AlfController {
  @operation({
    summary: "Get Alf",
  })
  @get()
  static getAlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alf",
  })
  @post("{id}")
  static createAlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
