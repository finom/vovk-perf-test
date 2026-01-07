import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cob")
export default class CobController {
  @operation({
    summary: "Get Cob",
  })
  @get()
  static getCob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cob",
  })
  @post("{id}")
  static createCob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
