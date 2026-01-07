import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dik")
export default class DikController {
  @operation({
    summary: "Get Dik",
  })
  @get()
  static getDik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dik",
  })
  @post("{id}")
  static createDik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
