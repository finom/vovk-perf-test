import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmy")
export default class BmyController {
  @operation({
    summary: "Get Bmy",
  })
  @get()
  static getBmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmy",
  })
  @post("{id}")
  static createBmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
