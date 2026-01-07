import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bue")
export default class BueController {
  @operation({
    summary: "Get Bue",
  })
  @get()
  static getBue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bue",
  })
  @post("{id}")
  static createBue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
