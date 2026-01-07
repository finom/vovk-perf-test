import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbr")
export default class LbrController {
  @operation({
    summary: "Get Lbr",
  })
  @get()
  static getLbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbr",
  })
  @post("{id}")
  static createLbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
