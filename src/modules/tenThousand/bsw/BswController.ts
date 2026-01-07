import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsw")
export default class BswController {
  @operation({
    summary: "Get Bsw",
  })
  @get()
  static getBsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsw",
  })
  @post("{id}")
  static createBsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
