import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgh")
export default class CghController {
  @operation({
    summary: "Get Cgh",
  })
  @get()
  static getCgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgh",
  })
  @post("{id}")
  static createCgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
