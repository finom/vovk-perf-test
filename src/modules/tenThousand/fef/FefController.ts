import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fef")
export default class FefController {
  @operation({
    summary: "Get Fef",
  })
  @get()
  static getFef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fef",
  })
  @post("{id}")
  static createFef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
