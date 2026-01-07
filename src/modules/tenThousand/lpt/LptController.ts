import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpt")
export default class LptController {
  @operation({
    summary: "Get Lpt",
  })
  @get()
  static getLpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpt",
  })
  @post("{id}")
  static createLpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
