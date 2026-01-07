import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjt")
export default class CjtController {
  @operation({
    summary: "Get Cjt",
  })
  @get()
  static getCjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjt",
  })
  @post("{id}")
  static createCjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
