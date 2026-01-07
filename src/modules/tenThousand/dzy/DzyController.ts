import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzy")
export default class DzyController {
  @operation({
    summary: "Get Dzy",
  })
  @get()
  static getDzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzy",
  })
  @post("{id}")
  static createDzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
