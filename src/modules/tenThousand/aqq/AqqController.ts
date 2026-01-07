import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqq")
export default class AqqController {
  @operation({
    summary: "Get Aqq",
  })
  @get()
  static getAqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqq",
  })
  @post("{id}")
  static createAqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
