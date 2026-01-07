import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dar")
export default class DarController {
  @operation({
    summary: "Get Dar",
  })
  @get()
  static getDar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dar",
  })
  @post("{id}")
  static createDar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
