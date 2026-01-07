import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csc")
export default class CscController {
  @operation({
    summary: "Get Csc",
  })
  @get()
  static getCsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csc",
  })
  @post("{id}")
  static createCsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
