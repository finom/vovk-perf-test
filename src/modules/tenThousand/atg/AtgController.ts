import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atg")
export default class AtgController {
  @operation({
    summary: "Get Atg",
  })
  @get()
  static getAtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atg",
  })
  @post("{id}")
  static createAtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
