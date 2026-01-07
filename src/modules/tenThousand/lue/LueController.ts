import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lue")
export default class LueController {
  @operation({
    summary: "Get Lue",
  })
  @get()
  static getLue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lue",
  })
  @post("{id}")
  static createLue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
