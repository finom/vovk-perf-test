import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fci")
export default class FciController {
  @operation({
    summary: "Get Fci",
  })
  @get()
  static getFci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fci",
  })
  @post("{id}")
  static createFci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
