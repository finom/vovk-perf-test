import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lth")
export default class LthController {
  @operation({
    summary: "Get Lth",
  })
  @get()
  static getLth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lth",
  })
  @post("{id}")
  static createLth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
