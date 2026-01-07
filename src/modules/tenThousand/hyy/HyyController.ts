import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyy")
export default class HyyController {
  @operation({
    summary: "Get Hyy",
  })
  @get()
  static getHyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyy",
  })
  @post("{id}")
  static createHyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
