import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcy")
export default class JcyController {
  @operation({
    summary: "Get Jcy",
  })
  @get()
  static getJcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcy",
  })
  @post("{id}")
  static createJcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
