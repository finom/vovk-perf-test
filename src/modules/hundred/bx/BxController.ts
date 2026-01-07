import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bx")
export default class BxController {
  @operation({
    summary: "Get Bx",
  })
  @get()
  static getBx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bx",
  })
  @post("{id}")
  static createBx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
