import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xi")
export default class XiController {
  @operation({
    summary: "Get Xi",
  })
  @get()
  static getXi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xi",
  })
  @post("{id}")
  static createXi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
