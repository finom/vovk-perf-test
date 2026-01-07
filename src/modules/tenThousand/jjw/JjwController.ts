import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjw")
export default class JjwController {
  @operation({
    summary: "Get Jjw",
  })
  @get()
  static getJjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjw",
  })
  @post("{id}")
  static createJjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
