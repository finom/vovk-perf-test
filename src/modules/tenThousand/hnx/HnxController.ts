import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnx")
export default class HnxController {
  @operation({
    summary: "Get Hnx",
  })
  @get()
  static getHnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnx",
  })
  @post("{id}")
  static createHnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
