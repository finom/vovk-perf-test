import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngp")
export default class NgpController {
  @operation({
    summary: "Get Ngp",
  })
  @get()
  static getNgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngp",
  })
  @post("{id}")
  static createNgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
