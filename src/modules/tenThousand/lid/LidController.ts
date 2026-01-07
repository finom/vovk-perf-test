import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lid")
export default class LidController {
  @operation({
    summary: "Get Lid",
  })
  @get()
  static getLid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lid",
  })
  @post("{id}")
  static createLid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
