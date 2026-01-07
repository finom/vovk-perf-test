import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jil")
export default class JilController {
  @operation({
    summary: "Get Jil",
  })
  @get()
  static getJil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jil",
  })
  @post("{id}")
  static createJil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
