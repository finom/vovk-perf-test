import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfl")
export default class BflController {
  @operation({
    summary: "Get Bfl",
  })
  @get()
  static getBfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfl",
  })
  @post("{id}")
  static createBfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
