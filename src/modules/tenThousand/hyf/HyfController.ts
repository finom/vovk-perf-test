import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyf")
export default class HyfController {
  @operation({
    summary: "Get Hyf",
  })
  @get()
  static getHyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyf",
  })
  @post("{id}")
  static createHyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
