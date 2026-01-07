import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brt")
export default class BrtController {
  @operation({
    summary: "Get Brt",
  })
  @get()
  static getBrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brt",
  })
  @post("{id}")
  static createBrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
