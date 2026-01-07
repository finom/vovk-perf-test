import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lom")
export default class LomController {
  @operation({
    summary: "Get Lom",
  })
  @get()
  static getLom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lom",
  })
  @post("{id}")
  static createLom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
