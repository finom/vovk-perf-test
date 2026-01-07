import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvr")
export default class HvrController {
  @operation({
    summary: "Get Hvr",
  })
  @get()
  static getHvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvr",
  })
  @post("{id}")
  static createHvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
