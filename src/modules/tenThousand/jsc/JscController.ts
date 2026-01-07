import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsc")
export default class JscController {
  @operation({
    summary: "Get Jsc",
  })
  @get()
  static getJsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsc",
  })
  @post("{id}")
  static createJsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
