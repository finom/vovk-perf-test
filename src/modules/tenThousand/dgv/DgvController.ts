import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgv")
export default class DgvController {
  @operation({
    summary: "Get Dgv",
  })
  @get()
  static getDgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgv",
  })
  @post("{id}")
  static createDgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
