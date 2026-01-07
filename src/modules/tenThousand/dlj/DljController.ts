import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlj")
export default class DljController {
  @operation({
    summary: "Get Dlj",
  })
  @get()
  static getDlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlj",
  })
  @post("{id}")
  static createDlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
