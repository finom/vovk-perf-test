import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqc")
export default class JqcController {
  @operation({
    summary: "Get Jqc",
  })
  @get()
  static getJqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqc",
  })
  @post("{id}")
  static createJqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
