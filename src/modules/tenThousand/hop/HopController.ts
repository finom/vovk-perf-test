import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hop")
export default class HopController {
  @operation({
    summary: "Get Hop",
  })
  @get()
  static getHop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hop",
  })
  @post("{id}")
  static createHop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
