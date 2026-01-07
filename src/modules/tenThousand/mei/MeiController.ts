import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mei")
export default class MeiController {
  @operation({
    summary: "Get Mei",
  })
  @get()
  static getMei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mei",
  })
  @post("{id}")
  static createMei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
