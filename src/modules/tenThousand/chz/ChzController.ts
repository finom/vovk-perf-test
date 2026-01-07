import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chz")
export default class ChzController {
  @operation({
    summary: "Get Chz",
  })
  @get()
  static getChz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chz",
  })
  @post("{id}")
  static createChz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
