import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jre")
export default class JreController {
  @operation({
    summary: "Get Jre",
  })
  @get()
  static getJre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jre",
  })
  @post("{id}")
  static createJre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
