import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhj")
export default class NhjController {
  @operation({
    summary: "Get Nhj",
  })
  @get()
  static getNhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhj",
  })
  @post("{id}")
  static createNhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
