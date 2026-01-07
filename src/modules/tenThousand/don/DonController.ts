import { procedure, prefix, get, post, operation } from "vovk";

@prefix("don")
export default class DonController {
  @operation({
    summary: "Get Don",
  })
  @get()
  static getDon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Don",
  })
  @post("{id}")
  static createDon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
