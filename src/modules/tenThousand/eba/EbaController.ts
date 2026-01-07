import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eba")
export default class EbaController {
  @operation({
    summary: "Get Eba",
  })
  @get()
  static getEba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eba",
  })
  @post("{id}")
  static createEba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
