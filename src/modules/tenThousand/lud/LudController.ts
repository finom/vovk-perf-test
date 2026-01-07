import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lud")
export default class LudController {
  @operation({
    summary: "Get Lud",
  })
  @get()
  static getLud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lud",
  })
  @post("{id}")
  static createLud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
