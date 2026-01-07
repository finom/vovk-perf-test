import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgr")
export default class CgrController {
  @operation({
    summary: "Get Cgr",
  })
  @get()
  static getCgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgr",
  })
  @post("{id}")
  static createCgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
