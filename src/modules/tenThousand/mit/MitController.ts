import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mit")
export default class MitController {
  @operation({
    summary: "Get Mit",
  })
  @get()
  static getMit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mit",
  })
  @post("{id}")
  static createMit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
