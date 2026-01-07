import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lef")
export default class LefController {
  @operation({
    summary: "Get Lef",
  })
  @get()
  static getLef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lef",
  })
  @post("{id}")
  static createLef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
