import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdz")
export default class FdzController {
  @operation({
    summary: "Get Fdz",
  })
  @get()
  static getFdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdz",
  })
  @post("{id}")
  static createFdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
