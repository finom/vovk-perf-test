import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hj")
export default class HjController {
  @operation({
    summary: "Get Hj",
  })
  @get()
  static getHj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hj",
  })
  @post("{id}")
  static createHj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
