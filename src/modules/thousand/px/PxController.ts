import { procedure, prefix, get, post, operation } from "vovk";

@prefix("px")
export default class PxController {
  @operation({
    summary: "Get Px",
  })
  @get()
  static getPx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Px",
  })
  @post("{id}")
  static createPx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
