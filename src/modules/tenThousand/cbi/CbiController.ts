import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbi")
export default class CbiController {
  @operation({
    summary: "Get Cbi",
  })
  @get()
  static getCbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbi",
  })
  @post("{id}")
  static createCbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
