import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxu")
export default class CxuController {
  @operation({
    summary: "Get Cxu",
  })
  @get()
  static getCxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxu",
  })
  @post("{id}")
  static createCxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
