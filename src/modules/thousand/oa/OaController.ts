import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oa")
export default class OaController {
  @operation({
    summary: "Get Oa",
  })
  @get()
  static getOa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oa",
  })
  @post("{id}")
  static createOa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
