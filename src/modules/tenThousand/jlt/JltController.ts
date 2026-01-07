import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlt")
export default class JltController {
  @operation({
    summary: "Get Jlt",
  })
  @get()
  static getJlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlt",
  })
  @post("{id}")
  static createJlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
