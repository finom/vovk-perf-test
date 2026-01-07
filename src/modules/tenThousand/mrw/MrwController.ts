import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrw")
export default class MrwController {
  @operation({
    summary: "Get Mrw",
  })
  @get()
  static getMrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrw",
  })
  @post("{id}")
  static createMrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
