import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiz")
export default class JizController {
  @operation({
    summary: "Get Jiz",
  })
  @get()
  static getJiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiz",
  })
  @post("{id}")
  static createJiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
