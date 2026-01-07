import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsf")
export default class BsfController {
  @operation({
    summary: "Get Bsf",
  })
  @get()
  static getBsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsf",
  })
  @post("{id}")
  static createBsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
