import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fl")
export default class FlController {
  @operation({
    summary: "Get Fl",
  })
  @get()
  static getFl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fl",
  })
  @post("{id}")
  static createFl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
