import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crw")
export default class CrwController {
  @operation({
    summary: "Get Crw",
  })
  @get()
  static getCrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crw",
  })
  @post("{id}")
  static createCrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
