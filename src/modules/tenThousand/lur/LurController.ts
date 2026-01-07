import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lur")
export default class LurController {
  @operation({
    summary: "Get Lur",
  })
  @get()
  static getLur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lur",
  })
  @post("{id}")
  static createLur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
