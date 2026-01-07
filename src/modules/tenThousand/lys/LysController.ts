import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lys")
export default class LysController {
  @operation({
    summary: "Get Lys",
  })
  @get()
  static getLys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lys",
  })
  @post("{id}")
  static createLys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
