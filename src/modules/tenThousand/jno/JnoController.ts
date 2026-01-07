import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jno")
export default class JnoController {
  @operation({
    summary: "Get Jno",
  })
  @get()
  static getJno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jno",
  })
  @post("{id}")
  static createJno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
