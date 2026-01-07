import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpi")
export default class FpiController {
  @operation({
    summary: "Get Fpi",
  })
  @get()
  static getFpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpi",
  })
  @post("{id}")
  static createFpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
