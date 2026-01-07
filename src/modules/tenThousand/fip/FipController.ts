import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fip")
export default class FipController {
  @operation({
    summary: "Get Fip",
  })
  @get()
  static getFip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fip",
  })
  @post("{id}")
  static createFip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
