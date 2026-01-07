import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcu")
export default class LcuController {
  @operation({
    summary: "Get Lcu",
  })
  @get()
  static getLcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcu",
  })
  @post("{id}")
  static createLcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
