import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htw")
export default class HtwController {
  @operation({
    summary: "Get Htw",
  })
  @get()
  static getHtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htw",
  })
  @post("{id}")
  static createHtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
