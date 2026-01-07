import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mye")
export default class MyeController {
  @operation({
    summary: "Get Mye",
  })
  @get()
  static getMye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mye",
  })
  @post("{id}")
  static createMye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
