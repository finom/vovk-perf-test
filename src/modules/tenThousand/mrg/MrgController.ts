import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrg")
export default class MrgController {
  @operation({
    summary: "Get Mrg",
  })
  @get()
  static getMrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrg",
  })
  @post("{id}")
  static createMrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
