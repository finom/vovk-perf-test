import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jma")
export default class JmaController {
  @operation({
    summary: "Get Jma",
  })
  @get()
  static getJma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jma",
  })
  @post("{id}")
  static createJma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
