import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dls")
export default class DlsController {
  @operation({
    summary: "Get Dls",
  })
  @get()
  static getDls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dls",
  })
  @post("{id}")
  static createDls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
