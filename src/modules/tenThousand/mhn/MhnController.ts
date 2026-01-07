import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhn")
export default class MhnController {
  @operation({
    summary: "Get Mhn",
  })
  @get()
  static getMhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhn",
  })
  @post("{id}")
  static createMhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
