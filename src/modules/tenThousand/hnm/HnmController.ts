import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnm")
export default class HnmController {
  @operation({
    summary: "Get Hnm",
  })
  @get()
  static getHnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnm",
  })
  @post("{id}")
  static createHnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
