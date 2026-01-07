import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cch")
export default class CchController {
  @operation({
    summary: "Get Cch",
  })
  @get()
  static getCch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cch",
  })
  @post("{id}")
  static createCch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
