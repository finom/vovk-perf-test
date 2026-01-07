import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boe")
export default class BoeController {
  @operation({
    summary: "Get Boe",
  })
  @get()
  static getBoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boe",
  })
  @post("{id}")
  static createBoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
