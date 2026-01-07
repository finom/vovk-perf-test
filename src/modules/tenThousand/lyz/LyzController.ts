import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyz")
export default class LyzController {
  @operation({
    summary: "Get Lyz",
  })
  @get()
  static getLyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyz",
  })
  @post("{id}")
  static createLyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
