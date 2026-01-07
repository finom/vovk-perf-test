import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpo")
export default class MpoController {
  @operation({
    summary: "Get Mpo",
  })
  @get()
  static getMpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpo",
  })
  @post("{id}")
  static createMpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
