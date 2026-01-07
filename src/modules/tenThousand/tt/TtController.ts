import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tt")
export default class TtController {
  @operation({
    summary: "Get Tt",
  })
  @get()
  static getTt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tt",
  })
  @post("{id}")
  static createTt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
