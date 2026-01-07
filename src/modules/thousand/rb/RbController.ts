import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rb")
export default class RbController {
  @operation({
    summary: "Get Rb",
  })
  @get()
  static getRb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rb",
  })
  @post("{id}")
  static createRb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
