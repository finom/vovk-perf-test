import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dw")
export default class DwController {
  @operation({
    summary: "Get Dw",
  })
  @get()
  static getDw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dw",
  })
  @post("{id}")
  static createDw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
