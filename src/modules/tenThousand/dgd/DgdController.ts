import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgd")
export default class DgdController {
  @operation({
    summary: "Get Dgd",
  })
  @get()
  static getDgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgd",
  })
  @post("{id}")
  static createDgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
