import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngv")
export default class NgvController {
  @operation({
    summary: "Get Ngv",
  })
  @get()
  static getNgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngv",
  })
  @post("{id}")
  static createNgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
