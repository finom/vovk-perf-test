import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvm")
export default class CvmController {
  @operation({
    summary: "Get Cvm",
  })
  @get()
  static getCvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvm",
  })
  @post("{id}")
  static createCvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
