import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jen")
export default class JenController {
  @operation({
    summary: "Get Jen",
  })
  @get()
  static getJen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jen",
  })
  @post("{id}")
  static createJen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
