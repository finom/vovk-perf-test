import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dml")
export default class DmlController {
  @operation({
    summary: "Get Dml",
  })
  @get()
  static getDml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dml",
  })
  @post("{id}")
  static createDml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
