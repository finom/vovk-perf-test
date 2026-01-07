import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dy")
export default class DyController {
  @operation({
    summary: "Get Dy",
  })
  @get()
  static getDy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dy",
  })
  @post("{id}")
  static createDy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
