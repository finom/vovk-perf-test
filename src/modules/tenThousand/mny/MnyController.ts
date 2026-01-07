import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mny")
export default class MnyController {
  @operation({
    summary: "Get Mny",
  })
  @get()
  static getMny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mny",
  })
  @post("{id}")
  static createMny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
