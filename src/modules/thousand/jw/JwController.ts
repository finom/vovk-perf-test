import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jw")
export default class JwController {
  @operation({
    summary: "Get Jw",
  })
  @get()
  static getJw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jw",
  })
  @post("{id}")
  static createJw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
