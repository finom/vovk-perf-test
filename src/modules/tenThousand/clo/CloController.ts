import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clo")
export default class CloController {
  @operation({
    summary: "Get Clo",
  })
  @get()
  static getClo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clo",
  })
  @post("{id}")
  static createClo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
