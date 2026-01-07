import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzy")
export default class JzyController {
  @operation({
    summary: "Get Jzy",
  })
  @get()
  static getJzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzy",
  })
  @post("{id}")
  static createJzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
