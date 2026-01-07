import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dee")
export default class DeeController {
  @operation({
    summary: "Get Dee",
  })
  @get()
  static getDee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dee",
  })
  @post("{id}")
  static createDee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
