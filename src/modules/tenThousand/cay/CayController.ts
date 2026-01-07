import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cay")
export default class CayController {
  @operation({
    summary: "Get Cay",
  })
  @get()
  static getCay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cay",
  })
  @post("{id}")
  static createCay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
