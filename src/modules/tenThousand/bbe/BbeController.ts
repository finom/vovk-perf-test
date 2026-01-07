import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbe")
export default class BbeController {
  @operation({
    summary: "Get Bbe",
  })
  @get()
  static getBbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbe",
  })
  @post("{id}")
  static createBbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
