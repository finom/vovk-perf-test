import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgx")
export default class DgxController {
  @operation({
    summary: "Get Dgx",
  })
  @get()
  static getDgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgx",
  })
  @post("{id}")
  static createDgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
