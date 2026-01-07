import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfl")
export default class DflController {
  @operation({
    summary: "Get Dfl",
  })
  @get()
  static getDfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfl",
  })
  @post("{id}")
  static createDfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
