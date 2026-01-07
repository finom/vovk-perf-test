import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgj")
export default class FgjController {
  @operation({
    summary: "Get Fgj",
  })
  @get()
  static getFgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgj",
  })
  @post("{id}")
  static createFgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
