import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cng")
export default class CngController {
  @operation({
    summary: "Get Cng",
  })
  @get()
  static getCng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cng",
  })
  @post("{id}")
  static createCng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
