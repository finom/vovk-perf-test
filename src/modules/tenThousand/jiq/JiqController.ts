import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiq")
export default class JiqController {
  @operation({
    summary: "Get Jiq",
  })
  @get()
  static getJiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiq",
  })
  @post("{id}")
  static createJiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
