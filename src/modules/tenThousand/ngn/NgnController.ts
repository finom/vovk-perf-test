import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngn")
export default class NgnController {
  @operation({
    summary: "Get Ngn",
  })
  @get()
  static getNgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngn",
  })
  @post("{id}")
  static createNgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
