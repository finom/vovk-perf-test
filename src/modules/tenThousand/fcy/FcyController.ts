import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcy")
export default class FcyController {
  @operation({
    summary: "Get Fcy",
  })
  @get()
  static getFcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcy",
  })
  @post("{id}")
  static createFcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
